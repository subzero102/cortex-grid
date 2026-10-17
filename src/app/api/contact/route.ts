import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      service,
      budget,
      message,
      _gotcha
    } = body;

    // Honeypot spam detection
    if (_gotcha) {
      // Silently discard bot submission
      return NextResponse.json(
        { success: true, message: "Consultation request received." },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your company or organization name." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select a service or practice area." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide brief details on your project (minimum 10 characters)." },
        { status: 400 }
      );
    }

    const leadData = {
      fullName,
      email,
      phone: phone || "Not provided",
      company,
      service,
      budget: budget || "Not specified",
      message,
      receivedAt: new Date().toISOString()
    };

    console.log("New Qualified Lead Submission:", leadData);

    // Optional 1: Forward to Discord / Slack / Zapier / n8n Webhook
    const webhookUrl = process.env.LEAD_NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚀 **New Consultation Request**: ${fullName} from **${company}**\n**Practice Area**: ${service}\n**Email**: ${email} | **Phone**: ${phone || "N/A"}\n**Message**: ${message}`
          })
        });
      } catch (webhookErr) {
        console.error("Failed to forward lead to webhook:", webhookErr);
      }
    }

    // Destination email for inbound consultation requests
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "alliances@cortexgridconsulting.com";

    // Transport Option A: Direct SMTP (Hostinger / Titan / Google Workspace / M365)
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const port = Number(process.env.SMTP_PORT) || 465;
        const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port,
          secure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const fromAddress = process.env.SMTP_FROM || `"Cortex Grid Inbound" <${smtpUser}>`;

        await transporter.sendMail({
          from: fromAddress,
          to: recipient,
          replyTo: email,
          subject: `[Cortex Grid Inbound] New Lead: ${company} (${service})`,
          text: `New Consultation Request\n\nName: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${service}\nMessage:\n${message}\n\nReceived at ${new Date().toUTCString()} via cortexgridconsulting.com`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; color: #141413; line-height: 1.6;">
              <h2 style="color: #D97757; border-bottom: 2px solid #E5DFD5; padding-bottom: 8px;">New Enterprise Consultation Request</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                <tr><td style="padding: 6px 0; color: #73716B; width: 140px;"><strong>Client Name:</strong></td><td>${fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #73716B;"><strong>Company:</strong></td><td>${company}</td></tr>
                <tr><td style="padding: 6px 0; color: #73716B;"><strong>Corporate Email:</strong></td><td><a href="mailto:${email}" style="color: #D97757;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #73716B;"><strong>Direct Phone:</strong></td><td>${phone || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; color: #73716B;"><strong>Practice Area:</strong></td><td>${service}</td></tr>
              </table>
              <div style="margin-top: 12px;">
                <strong>Project Objectives & Context:</strong>
                <div style="background: #FAF8F5; border-left: 4px solid #D97757; padding: 12px; margin-top: 6px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
              </div>
              <hr style="border: 0; border-top: 1px solid #E5DFD5; margin-top: 24px;" />
              <p style="font-size: 11px; color: #87867F;">Dispatched by Cortex Grid Consulting Lead Router at ${new Date().toUTCString()}</p>
            </div>
          `,
        });
        console.log(`[Email Dispatch] Successfully sent consultation notification via SMTP (${smtpHost}) to ${recipient}`);
      } catch (smtpErr) {
        console.error("[Email Dispatch] Failed to dispatch email via SMTP:", smtpErr);
      }
    }

    // Transport Option B: Send Email via Resend REST API if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const fromAddress = process.env.RESEND_FROM || "Cortex Grid Web <onboarding@resend.dev>";
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [recipient],
            reply_to: email,
            subject: `[Cortex Grid Inbound] New Lead: ${company} (${service})`,
            html: `
              <h2>New Consultation Request</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
              <hr/>
              <p><small>Received at ${new Date().toUTCString()} via cortexgridconsulting.com</small></p>
            `
          })
        });
        if (!resendRes.ok) {
          const errBody = await resendRes.text();
          console.error("[Email Dispatch] Resend API returned error:", resendRes.status, errBody);
        } else {
          console.log(`[Email Dispatch] Successfully sent consultation notification via Resend to ${recipient}`);
        }
      } catch (emailErr) {
        console.error("[Email Dispatch] Failed to dispatch email via Resend:", emailErr);
      }
    }

    if (!smtpHost && !resendApiKey && !webhookUrl) {
      console.warn(
        "[Email Dispatch] No email transport configured (SMTP_HOST or RESEND_API_KEY or LEAD_NOTIFICATION_WEBHOOK_URL). " +
        "Lead has been logged to container logs. Configure your credentials in .env to receive emails in your inbox."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your request has been logged. A senior architect from Cortex Grid Consulting will review your project parameters and contact you within 24 business hours."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

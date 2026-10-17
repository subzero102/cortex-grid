import { NextResponse } from "next/server";

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

    // Optional 2: Send Email via Resend if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "alliances@cortexgridconsulting.com";
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: "Cortex Grid Web <onboarding@resend.dev>",
            to: [recipient],
            subject: `New Inbound Lead: ${company} (${service})`,
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
      } catch (emailErr) {
        console.error("Failed to dispatch email via Resend:", emailErr);
      }
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

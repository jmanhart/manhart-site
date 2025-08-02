import { Resend } from "resend";

export async function POST({ request }) {
  console.log("=== CONTACT FORM API CALL STARTED ===");

  try {
    // Get API key using Astro/Vite's environment variable system
    const apiKey = import.meta.env.RESEND_API_KEY;

    console.log("🔍 ENVIRONMENT VARIABLES CHECK:");
    console.log("- RESEND_API_KEY exists:", !!apiKey);
    console.log("- API key length:", apiKey ? apiKey.length : 0);
    console.log(
      "- API key starts with re_:",
      apiKey ? apiKey.startsWith("re_") : false
    );

    // Check if API key is available
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is not set in environment variables");
      console.error(
        "💡 Make sure you have a .env file in your project root with:"
      );
      console.error("   RESEND_API_KEY=re_xxxxxxxxx");
      console.error(
        "💡 And restart your dev server after creating the .env file"
      );

      return new Response(
        JSON.stringify({
          error: "Email service not configured. Please check server logs.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ API key found, proceeding with form processing...");

    // Parse form data
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("📝 FORM DATA RECEIVED:");
    console.log("- Name:", name);
    console.log("- Email:", email);
    console.log("- Message length:", message ? message.length : 0);

    // Basic validation
    if (!name || !email || !message) {
      console.log("❌ VALIDATION FAILED - Missing required fields");
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ VALIDATION FAILED - Invalid email format:", email);
      return new Response(
        JSON.stringify({
          error: "Invalid email format",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ Form validation passed, initializing Resend...");

    // Initialize Resend
    const resend = new Resend(apiKey);

    console.log("📧 SENDING EMAIL VIA RESEND...");
    console.log("- From: Contact Form <onboarding@resend.dev>");
    console.log("- To: manhartjohn@gmail.com");
    console.log("- Subject: New Contact Form Message from", name);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["manhartjohn@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ RESEND API ERROR:");
      console.error("- Error type:", error.constructor.name);
      console.error("- Error message:", error.message);
      console.error("- Full error:", error);

      return new Response(
        JSON.stringify({
          error: "Failed to send email. Please try again.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ EMAIL SENT SUCCESSFULLY!");
    console.log("- Resend response:", data);
    console.log("=== CONTACT FORM API CALL COMPLETED ===");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("💥 UNEXPECTED ERROR IN CONTACT FORM API:");
    console.error("- Error type:", error.constructor.name);
    console.error("- Error message:", error.message);
    console.error("- Error stack:", error.stack);
    console.error("=== CONTACT FORM API CALL FAILED ===");

    return new Response(
      JSON.stringify({
        error: "Internal server error. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

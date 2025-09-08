import { Resend } from "resend";

export async function POST({ request }) {
  console.log("=== CONTACT FORM API CALL STARTED ===");

  try {
    // Get API key using Astro/Vite's environment variable system
    const apiKey = import.meta.env.RESEND_API_KEY;
    const turnstileSecretKey = import.meta.env.TURNSTILE_SECRET_KEY;

    console.log("ENVIRONMENT VARIABLES CHECK:");
    console.log("- RESEND_API_KEY exists:", !!apiKey);
    console.log("- TURNSTILE_SECRET_KEY exists:", !!turnstileSecretKey);
    console.log("- API key length:", apiKey ? apiKey.length : 0);
    console.log(
      "- API key starts with re_:",
      apiKey ? apiKey.startsWith("re_") : false
    );
    console.log(
      "- Turnstile secret key length:",
      turnstileSecretKey ? turnstileSecretKey.length : 0
    );
    console.log(
      "- Turnstile secret key starts with 0x4AAAAAAA:",
      turnstileSecretKey ? turnstileSecretKey.startsWith("0x4AAAAAAA") : false
    );

    // Check if API key is available
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
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

    console.log("API key found, proceeding with form processing...");

    // Parse form data
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const turnstileToken = formData.get("turnstile-token");

    console.log("📝 FORM DATA RECEIVED:");
    console.log("- Name:", name);
    console.log("- Email:", email);
    console.log("- Message length:", message ? message.length : 0);
    console.log("- Turnstile token exists:", !!turnstileToken);
    console.log(
      "- Turnstile token length:",
      turnstileToken ? turnstileToken.length : 0
    );
    console.log(
      "- Turnstile token starts with 0x4AAAAAAA:",
      turnstileToken ? turnstileToken.startsWith("0x4AAAAAAA") : false
    );

    // Verify Turnstile token
    if (!turnstileToken) {
      console.log("VALIDATION FAILED - Missing Turnstile token");
      console.log("💡 This could mean:");
      console.log("   - Turnstile widget failed to load on frontend");
      console.log(
        "   - Frontend environment variable PUBLIC_TURNSTILE_SITE_KEY is missing"
      );
      console.log("   - Turnstile script failed to execute");
      console.log("💡 Proceeding without Turnstile verification for now");
      // In production, you might want to block this
      // return new Response(
      //   JSON.stringify({
      //     error: "Security check failed. Please try again.",
      //   }),
      //   {
      //     status: 400,
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
    }

    // Verify Turnstile token with Cloudflare
    if (turnstileSecretKey) {
      console.log("🔒 STARTING TURNSTILE VERIFICATION...");
      console.log("- Secret key available:", !!turnstileSecretKey);
      console.log(
        "- Token to verify:",
        turnstileToken.substring(0, 20) + "..."
      );

      try {
        console.log("Making request to Cloudflare Turnstile API...");
        const turnstileResponse = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              secret: turnstileSecretKey,
              response: turnstileToken,
            }),
          }
        );

        console.log(
          "Cloudflare API Response Status:",
          turnstileResponse.status
        );
        console.log(
          "Cloudflare API Response Headers:",
          Object.fromEntries(turnstileResponse.headers.entries())
        );

        if (!turnstileResponse.ok) {
          console.error("CLOUDFLARE API ERROR:");
          console.error("- Status:", turnstileResponse.status);
          console.error("- Status Text:", turnstileResponse.statusText);
          const errorText = await turnstileResponse.text();
          console.error("- Response Body:", errorText);

          return new Response(
            JSON.stringify({
              error:
                "Security verification service unavailable. Please try again.",
            }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        const turnstileResult = await turnstileResponse.json();
        console.log("🔒 TURNSTILE VERIFICATION RESULT:");
        console.log("- Success:", turnstileResult.success);
        console.log("- Error codes:", turnstileResult["error-codes"] || "None");
        console.log("- Challenge timestamp:", turnstileResult["challenge_ts"]);
        console.log("- Hostname:", turnstileResult.hostname);
        console.log("- Action:", turnstileResult.action);
        console.log("- Cdata:", turnstileResult.cdata);

        if (!turnstileResult.success) {
          console.error("TURNSTILE VERIFICATION FAILED:");
          console.error("- Error codes:", turnstileResult["error-codes"]);
          console.error("- Possible reasons:");
          console.error("  * Invalid or expired token");
          console.error("  * Wrong secret key");
          console.error("  * Bot detection triggered");
          console.error("  * Token already used");

          return new Response(
            JSON.stringify({
              error: "Security check failed. Please try again.",
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
        console.log("Turnstile verification passed successfully");
        console.log(
          "- Challenge completed at:",
          turnstileResult["challenge_ts"]
        );
        console.log("- Verified hostname:", turnstileResult.hostname);
      } catch (turnstileError) {
        console.error("💥 TURNSTILE API ERROR:");
        console.error("- Error type:", turnstileError.constructor.name);
        console.error("- Error message:", turnstileError.message);
        console.error("- Error stack:", turnstileError.stack);
        console.error("- Possible causes:");
        console.error("  * Network connectivity issues");
        console.error("  * Cloudflare API down");
        console.error("  * DNS resolution problems");
        console.error("  * Request timeout");

        return new Response(
          JSON.stringify({
            error:
              "Security verification service unavailable. Please try again.",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      console.log("TURNSTILE_SECRET_KEY not found, skipping verification");
      console.log(
        "💡 To enable Turnstile verification, add to your .env file:"
      );
      console.log("   TURNSTILE_SECRET_KEY=your_secret_key_here");
    }

    // Basic validation
    if (!name || !email || !message) {
      console.log("VALIDATION FAILED - Missing required fields");
      console.log("- Name provided:", !!name);
      console.log("- Email provided:", !!email);
      console.log("- Message provided:", !!message);
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
      console.log("VALIDATION FAILED - Invalid email format:", email);
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

    console.log("Form validation passed, initializing Resend...");

    // Initialize Resend
    const resend = new Resend(apiKey);

    console.log("📧 SENDING EMAIL VIA RESEND...");
    console.log("- From: Contact Form <onboarding@resend.dev>");
    console.log("- To: manhartjohn@gmail.com");
    console.log("- Subject: New Contact Form Message from", name);
    console.log("- Message length:", message.length);

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
      console.error("RESEND API ERROR:");
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

    console.log("EMAIL SENT SUCCESSFULLY!");
    console.log("- Resend response:", data);
    console.log("- Email ID:", data?.id);
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
    console.error("- Error name:", error.name);
    console.error("- Error code:", error.code);
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

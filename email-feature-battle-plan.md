# 📬 Resend + Gmail Contact Form Setup

This guide outlines how to send contact form submissions from `hello@manhart.io` using Resend's free tier and receive them in your personal Gmail inbox.

---

## ✅ Overview

- **Send from**: `hello@manhart.io` (via Resend)
- **Receive at**: your Gmail inbox
- **Reply to**: the user's submitted email (via `reply-to` header)
- **Stack**: Astro + Resend + Gmail

---

## 🧱 Phase 1: Domain + Resend Setup

1. **Create a Resend account**

   - https://resend.com

2. **Verify your domain (`manhart.io`)**

   - Go to **Resend → Domains → Add Domain**
   - Choose **Send only**
   - Resend will provide DNS records:
     - SPF (TXT)
     - DKIM (TXT)
     - Optional: DMARC (TXT), Return-Path (CNAME)

3. **Add DNS records to your domain registrar**

   - Use Cloudflare, Namecheap, etc.
   - Add records exactly as Resend gives you
   - Wait 5–15 mins for verification

4. **Create and copy your Resend API key**

   - Go to **Resend → API Keys → Create Key**
   - Save this in your `.env` as:

     ```
     RESEND_API_KEY=your_key_here
     ```

---

## 📬 Phase 2: Gmail Receiving + Reply Setup

5. **Send all contact emails _to_ your Gmail**

   - In your API handler:

     ```
     to: 'yourname@gmail.com'
     ```

6. **Set the `from:` value to your domain**

   - Must match verified domain:

     ```
     from: 'Website Contact <hello@manhart.io>'
     ```

7. **Set the `reply-to:` to the user’s email**

   - This allows replying directly in Gmail:

     ```
     reply_to: userInputEmail
     ```

8. _(Optional)_ **Set up Gmail to "Send as" hello@manhart.io**

   - Gmail → Settings → Accounts and Import → "Send mail as"
   - Add `hello@manhart.io`
   - Requires SMTP credentials (only possible if you're also hosting email)

   > Skip this if you're just receiving messages — replies will come from your main Gmail address, which is fine for most setups.

---

## 🛠 Phase 3: Astro Setup

9. **Create a contact form page**

   - Path: `/contact`
   - Fields: name, email, message
   - Method: `POST` to `/api/contact`

10. **Create an API route**

- File: `/src/pages/api/contact.ts`
- In the handler:
  - Parse form data
  - Send email via Resend using the fields
  - Use `from: hello@manhart.io`, `to: your Gmail`, `reply-to: user's email`

---

## 🧪 Phase 4: Testing + Deployment

11. **Test the full flow**

- Submit the form locally
- Confirm:
  - You receive the message in Gmail
  - Replying works and targets the sender

12. **Deploy to production**

- Use Vercel, Netlify, etc.
- Add your `RESEND_API_KEY` in the hosting platform’s env variables

13. **Monitor via Resend dashboard**

- Check delivery, logs, and usage under your account

---

## 🧠 Notes

- You don’t need to host email for `hello@manhart.io` unless you want to _send replies from that address inside Gmail_.
- You can upgrade later to Fastmail, Proton, or a self-hosted inbox if you want full control.
- Resend’s free tier includes 3,000 emails/month and 100/day.

---

## 💬 Want to extend this later?

- Add a thank-you redirect or success message
- Store submissions in a database (like Supabase)
- Add spam protection (honeypot field or hCaptcha)
- Set up rate limiting to prevent abuse

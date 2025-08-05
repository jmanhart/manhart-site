# Sentry Setup Guide

## 1. Create a Sentry Account
1. Go to [sentry.io](https://sentry.io)
2. Sign up for a free account
3. Create a new project for your Astro site

## 2. Get Your DSN
1. In your Sentry project, go to Settings > Projects > [Your Project] > Client Keys (DSN)
2. Copy your DSN (it looks like: `https://abc123@sentry.io/123456`)

## 3. Update Environment Variables
Add these to your `.env` file:

```env
# Sentry Configuration
SENTRY_DSN=https://your-dsn-here@sentry.io/your-project-id
PUBLIC_SENTRY_DSN=https://your-dsn-here@sentry.io/your-project-id
PUBLIC_SENTRY_RELEASE=development
```

## 4. Update Vercel Environment Variables
1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Add the same environment variables:
   - `SENTRY_DSN`
   - `PUBLIC_SENTRY_DSN`
   - `PUBLIC_SENTRY_RELEASE`

## 5. Test the Setup
1. Deploy your changes
2. Visit your site
3. Check Sentry dashboard for events

## Features Enabled:
- ✅ **Session Replay**: Records user interactions and DOM changes
- ✅ **Performance Monitoring**: Tracks page loads, API calls, and long tasks
- ✅ **Error Monitoring**: Captures JavaScript errors and exceptions
- ✅ **Release Tracking**: Links errors to specific code versions
- ✅ **Environment Filtering**: Only sends data from production

## Configuration Notes:
- Session replay records 10% of normal sessions and 100% of error sessions
- Performance monitoring captures 100% of transactions
- Localhost events are filtered out to avoid development noise
- Sensitive form fields are masked in session replays 
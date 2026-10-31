# Environment Strategy

Maintain isolated Development, Preview, and Production environments.

- Local development uses developer-specific environment files excluded from Git.
- Preview uses non-production Neon branches and Midtrans Sandbox.
- Production uses the production database and live payment credentials only after approval.

Secrets are configured per Vercel Project and environment. Do not copy secrets into public website projects unless required. Validate environment variables at server startup and fail closed when a required secret is missing.

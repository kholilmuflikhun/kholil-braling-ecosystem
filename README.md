# Kholil + Braling Ecosystem

Integrated digital business ecosystem for Kholil Muflikhun Personal Brand and Braling Print Studio.

## Applications

| App | Workspace | Path |
|---|---|---|
| Growth & Business OS | `@app/growth-os` | `apps/growth-os` |
| Production & POS | `@app/production-pos` | `apps/production-pos` |
| Personal Website | `@app/personal-website` | `apps/personal-website` |
| Braling E-Commerce | `@app/braling-ecommerce` | `apps/braling-ecommerce` |

## Prerequisites

- Node.js 22.18+ (LTS line)
- pnpm 10.x (pinned in packageManager)
- PostgreSQL / Neon for database-backed features

## Getting started

```bash
corepack enable
pnpm install
pnpm dev
```

Run one application:

```bash
pnpm --filter @app/growth-os dev
pnpm --filter @app/production-pos dev
pnpm --filter @app/personal-website dev
pnpm --filter @app/braling-ecommerce dev
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Database

Prisma schema and migration history are centralized under `prisma/`. Configure `DATABASE_URL` and `DIRECT_URL` locally using `.env.example`. Never commit secrets. Review migrations before applying them to shared or production databases.

## Architecture

- Modular monolith with four independently deployable Next.js applications.
- Shared workspace packages for UI, identity, validation, database access, and integrations.
- One PostgreSQL database with domain schemas and explicit ownership boundaries.
- Server-side authorization for all privileged operations.
- Transactional outbox for reliable cross-domain events.

See [docs/architecture](docs/architecture), [docs/database](docs/database), and [docs/deployment](docs/deployment).

## Status

This repository contains the initial foundation. Business workflows, production integrations, and deployment environments must be implemented and verified in subsequent phases. No live payment, OAuth, or production database credentials are included.

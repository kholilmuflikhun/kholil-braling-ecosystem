# Database Architecture

Prisma schema is centralized at `prisma/schema.prisma`. PostgreSQL schemas are used to establish domain ownership boundaries.

Initial domains: identity, core, crm, catalog, sales, production, inventory, purchasing, finance, marketing, projects, kpi, commerce, content, integrations, notifications, audit.

Use UUID identifiers, NUMERIC/Decimal for money, UTC timestamps, foreign keys, indexes, transactional writes, and audited corrections. A domain schema boundary is not a substitute for server-side authorization.

Production migrations must be reviewed, backed up where appropriate, and applied through a controlled release process.

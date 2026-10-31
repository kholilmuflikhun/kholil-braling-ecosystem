# Prisma Conventions

- Keep the Prisma schema and migration history centralized at repository root.
- Use PostgreSQL schemas to express domain ownership.
- Use UUID primary keys for business entities.
- Use Decimal / NUMERIC for money and fractional quantities.
- Add explicit indexes for query patterns and foreign keys.
- Use transactions for multi-record business operations.
- Review generated SQL before applying migrations to shared environments.
- Do not run destructive production migrations without backup and owner approval.

The initial schema is a foundation, not the complete final data model. Expand it domain-by-domain with tests and migration review.

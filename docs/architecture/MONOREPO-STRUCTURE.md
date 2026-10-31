# Monorepo Structure

The repository contains four independently deployable Next.js applications under `apps/` and reusable internal libraries under `packages/`.

Applications:
- `growth-os`: business management, CRM, finance, KPI, marketing, analytics.
- `production-pos`: cashier, order operations, production, inventory, purchasing.
- `personal-website`: public profile, services, portfolio, blog, lead capture.
- `braling-ecommerce`: public catalog, custom order, cart, checkout, customer account.

Shared packages own reusable contracts and infrastructure. Avoid circular dependencies and keep business rules out of presentation components.

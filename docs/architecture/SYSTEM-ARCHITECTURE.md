# System Architecture

## Architectural decisions

- Modular monolith, not microservices, for the initial operating scale.
- Four Next.js applications with independent deployment boundaries.
- Shared PostgreSQL database with domain schema boundaries.
- Centralized identity and server-side authorization.
- Shared catalog, pricing, customer, and sales domain contracts.
- Transactional outbox for reliable asynchronous integration.

## Applications

1. Growth & Business OS.
2. Braling Print Studio Production & POS.
3. Kholil Muflikhun Personal Website.
4. Braling Print Studio E-Commerce.

## Critical rules

- Public browser clients never access privileged database credentials.
- Prices, payment status, inventory, and accounting are verified server-side.
- Financial postings are immutable; corrections use reversal/adjustment entries.
- Production and sales orders have separate lifecycle states.

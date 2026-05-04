# Velora

Velora is a front-end foundation for an ecommerce operations dashboard aimed at store managers selling across Etsy and Shopify, with future support planned for Printify, Gelato, and local LLM-assisted listing workflows.

This repository currently contains a mock-data-driven React application focused on the product shell, routing, shared UI primitives, and initial dashboard surfaces. It does not include backend services, authentication, or live marketplace integrations yet.

## Current Scope

- Vite + React + TypeScript application
- Tailwind CSS styling baseline
- Shared SaaS dashboard shell with sidebar and top bar
- Route foundations for:
  - `/dashboard`
  - `/inventory`
  - `/listing-studio`
  - `/marketing`
  - `/orders`
  - `/analytics`
  - `/settings`
- Shared domain types in `src/lib/types.ts`
- Realistic mock data in `src/lib/mock-data.ts`
- Recharts-based dashboard and analytics placeholders
- Local UI primitives and reusable sections for future expansion

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- lucide-react
- Recharts
- Vitest
- Testing Library

## Getting Started

### Prerequisites

- Node.js 24+
- npm 11+

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

### Quality checks

```bash
npm run test:run -- src/test/app.test.tsx
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
src/
  components/
    analytics/
    dashboard/
    inventory/
    layout/
    listing/
    marketing/
    orders/
    settings/
    ui/
  lib/
    mock-data.ts
    navigation.ts
    types.ts
    utils.ts
  pages/
  test/
```

## Product Notes

- The UI is intentionally built as a polished dashboard foundation, not a wireframe.
- All data is mocked for now.
- Etsy, Shopify, Printify, Gelato, and Local LLM states are visual placeholders only.
- Authentication, backend APIs, persistence, and provider integrations are out of scope in the current implementation.

## Documentation

- [AGENTS.md](/Users/angelo/Projects/Personal/Velora/AGENTS.md)
- [docs/project-plan.md](/Users/angelo/Projects/Personal/Velora/docs/project-plan.md)
- [docs/tasks.md](/Users/angelo/Projects/Personal/Velora/docs/tasks.md)
- [docs/devlog.md](/Users/angelo/Projects/Personal/Velora/docs/devlog.md)

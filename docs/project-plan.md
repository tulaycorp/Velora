# Project Plan

## Product

Tulay is an integrated management platform for store managers who sell across multiple ecommerce channels such as Etsy and Shopify.

The platform centralizes product inventory, listing creation, order fulfillment, print-on-demand workflows, analytics, and AI-assisted content generation.

Tulay is not a simple admin panel. It should feel like a polished SaaS operations dashboard for ecommerce operators.

## Current Goal

Build a professional front-end MVP using mock data.

The app should look like a near-production dashboard, not a rough wireframe. It must have realistic spacing, polished cards, real table layouts, meaningful empty/loading/error states where appropriate, consistent visual hierarchy, and reusable components.

Do not implement real backend logic or external integrations yet.

## Front-End MVP Rule

Use mock data only.

External integrations must be represented as realistic disabled, disconnected, connected, queued, syncing, failed, or placeholder states.

No real API calls should be made yet.

## Visual Quality Standard

The interface should look like a professional modern SaaS dashboard.

Use:
- Clean left sidebar navigation
- Top page headers with titles, subtitles, and page actions
- Card-based layouts
- Realistic tables
- Status badges
- Filters and search bars
- Metric cards
- Charts
- Professional spacing
- Responsive layouts
- Consistent typography
- Subtle borders and shadows
- Meaningful icons
- Realistic ecommerce/POD mock data

Avoid:
- Wireframe placeholders
- Bare HTML controls
- Empty gray boxes unless they represent a real upload dropzone or empty state
- Random colors
- Overly playful styling
- Fake lorem ipsum
- Pages that only say “Coming soon”
- Unstructured one-file implementations

## Target Tech Stack

Use:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui or equivalent component primitives
- lucide-react for icons
- Recharts for charts
- TanStack Table or well-structured reusable table components
- React Hook Form and Zod where forms become complex

If the project is empty, initialize the front-end app before building components.

Preferred setup:
- Vite React TypeScript, or Next.js App Router if already selected
- Tailwind CSS
- Component-based structure
- Mock data in `src/lib/mock-data.ts`
- Shared types in `src/lib/types.ts`

## Product Areas

### 1. Dashboard

Purpose:
Give store managers a fast executive overview of store performance and operational issues.

Must include:
- Gross revenue
- Net profit
- Orders
- Conversion rate or average order value
- Revenue trend chart by channel
- Alert cards for low stock, failed syncs, and unfulfilled POD orders
- Top-selling products
- Recent activity feed
- Channel health summary for Etsy, Shopify, Printify, Gelato, and Local LLM

### 2. Inventory

Purpose:
Centralize internal product catalog and channel availability.

Must include:
- Searchable product table
- Filters by channel, stock state, sync state, and product type
- Product image thumbnail
- Product title
- SKU
- Product category
- Price
- Stock
- Platform status
- Sync status
- Sales/performance summary
- Row actions such as View, Edit, Sync, and Publish

### 3. Listing Studio

Purpose:
Create and optimize ecommerce listings with local AI assistance.

Must include:
- Product media upload area
- Listing title field
- Description field
- Price, quantity, SKU
- Tags/keywords field
- Platform-specific tabs for General, Etsy, and Shopify
- AI Assistant panel with actions:
  - Generate title
  - Generate description
  - Generate tags
  - Optimize SEO
- SEO score panel
- Publishing readiness panel
- Draft/publish action area
- Placeholder handlers only, no real LLM calls

### 4. Marketing & SEO

Purpose:
Help store managers identify content and ranking opportunities.

Must include:
- Keyword ranking chart
- Keyword cards
- Optimization opportunities table
- AI fix buttons as placeholders
- Channel filters
- SEO issue badges such as Missing Keywords, Short Description, Weak Title, No Tags, Poor Image Count

### 5. Orders & Fulfillment

Purpose:
Manage orders across channels and track print-on-demand fulfillment.

Must include:
- Order summary metric cards
- Searchable order table
- Filters by channel, order status, POD status, and provider
- Order ID
- Date
- Customer
- Product
- Quantity
- Total
- Channel
- Order status
- POD provider
- POD status
- Actions such as Update, Track, Trigger Workflow
- POD workflow queue showing Printify and Gelato jobs

### 6. Analytics & Finance

Purpose:
Show financial performance and product profitability.

Must include:
- Gross revenue
- Expenses
- Net profit
- Profit margin
- Sales by channel chart
- Expense breakdown chart
- Product profitability table
- Channel comparison
- Mock month-over-month indicators

### 7. Settings

Purpose:
Manage integrations, automation rules, and AI configuration.

Must include:
- Integration cards for Etsy, Shopify, Printify, Gelato, and Local LLM
- Connection states
- Global listing rules
- Inventory sync rules
- Price rounding rules
- Automation settings
- AI content settings
- Brand voice/instructions fields
- Placeholder buttons only

## Design Direction

The UI should feel closer to a polished ecommerce operations product than a wireframe.

Reference style:
- Modern SaaS dashboard
- Neutral background
- White cards
- Strong table readability
- Compact but not cramped
- Professional status badges
- Clear actions
- Consistent page structure

Use the product name `Tulay`.

Use realistic mock data for a store selling print-on-demand and ecommerce products.

Example channels:
- Etsy
- Shopify

Example POD providers:
- Printify
- Gelato

Example AI provider:
- Local LLM

## Data Modeling Guidance for Front End

Create shared TypeScript types for:

- Store
- SalesChannel
- PodProvider
- IntegrationStatus
- Product
- ProductVariant
- ListingDraft
- ListingChannelTarget
- Order
- OrderLineItem
- PodJob
- SyncStatus
- PublishingStatus
- AiServiceStatus
- SeoIssue
- AnalyticsMetric

Suggested status values:

```ts
type IntegrationStatus = "connected" | "disconnected" | "needs_attention";
type SyncStatus = "synced" | "syncing" | "failed" | "queued" | "not_synced";
type PublishingStatus = "draft" | "ready" | "published" | "failed" | "needs_review";
type PodStatus = "not_required" | "queued" | "in_production" | "shipped" | "failed";
type AiServiceStatus = "online" | "offline" | "checking";
````

## Routing

The app should include these pages:

* `/dashboard`
* `/inventory`
* `/listing-studio`
* `/marketing`
* `/orders`
* `/analytics`
* `/settings`

The root route should redirect to or render the dashboard.

## Non-Goals for Current MVP

Do not implement:

* Real Etsy API calls
* Real Shopify API calls
* Real Printify API calls
* Real Gelato API calls
* Real local LLM calls
* Authentication
* Real database
* Payment processing
* Multi-user permissions
* Real file uploads
* Production deployment

## Completion Criteria

The front-end MVP is acceptable when:

1. The app can be installed and run locally.
2. All main routes render.
3. The layout looks professional, not wireframe-like.
4. Mock data is centralized and typed.
5. Reusable components are used.
6. Navigation works.
7. Tables, cards, charts, forms, and status badges are visually polished.
8. Buttons that imply real integrations use placeholder handlers.
9. No real API integrations are attempted.
10. Lint/typecheck/build pass if available.

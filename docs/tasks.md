# Tasks

## [High] Build App Shell

Description and acceptance criteria.

Create the shared layout for the Tulay dashboard app.

Files:
- src/components/layout/AppShell.tsx
- src/components/layout/Sidebar.tsx
- src/components/layout/PageHeader.tsx

Context:
- Sidebar should include Dashboard, Inventory, Listing Studio, Marketing, Orders, Analytics, and Settings.
- Use the uploaded wireframe as the visual reference.
- Keep styling minimal, clean, and close to the wireframe.
- Use mock navigation only.

## [High] Build Dashboard Page

Description and acceptance criteria.

Create the dashboard overview page using mock revenue and product data.

Files:
- src/app/dashboard/page.tsx
- src/components/dashboard/RevenueChart.tsx
- src/components/dashboard/AlertCard.tsx
- src/components/dashboard/TopProductsList.tsx
- src/lib/mock-data.ts

Context:
- Include revenue chart by channel.
- Include alert cards for low inventory, failed syncs, and unfulfilled orders.
- Include top-selling products list.

## [High] Build Inventory Page

Description and acceptance criteria.

Create a searchable inventory table.

Files:
- src/app/inventory/page.tsx
- src/components/inventory/InventoryTable.tsx
- src/components/inventory/PlatformBadge.tsx
- src/components/inventory/SyncStatusBadge.tsx

Context:
- Include product title, SKU, price, stock, platform status, sync status, performance, and actions.
- Use mock data only.

## [High] Build Listing Studio Page

Description and acceptance criteria.

Create the listing creation and optimization page.

Files:
- src/app/listing-studio/page.tsx
- src/components/listing/MediaUploader.tsx
- src/components/listing/ListingForm.tsx
- src/components/listing/AiAssistantPanel.tsx
- src/components/listing/SeoScoreCard.tsx
- src/components/listing/PublishingChannels.tsx

Context:
- Include media upload placeholders.
- Include fields for title, description, price, quantity, and SKU.
- Include AI assistant buttons for generating title, description, and tags.
- Buttons should use placeholder handlers only.
- Include SEO score card and publishing channel readiness.

## [Medium] Build Orders & Fulfillment Page

Description and acceptance criteria.

Create the orders management and POD workflow page.

Files:
- src/app/orders/page.tsx
- src/components/orders/OrderStats.tsx
- src/components/orders/OrdersTable.tsx
- src/components/orders/PodWorkflowPanel.tsx

Context:
- Show order stats.
- Show order table.
- Include Printify/Gelato workflow placeholders.
- No real API calls.

## [Medium] Build Analytics & Finance Page

Description and acceptance criteria.

Create analytics page using mock sales and profitability data.

Files:
- src/app/analytics/page.tsx
- src/components/analytics/MetricCard.tsx
- src/components/analytics/SalesByChannelChart.tsx
- src/components/analytics/ExpenseBreakdownChart.tsx
- src/components/analytics/ProductProfitabilityTable.tsx

Context:
- Include revenue, expenses, profit, and margin cards.
- Include charts and product profitability table.

## [Medium] Build Settings Page

Description and acceptance criteria.

Create settings page for integrations, global rules, and AI configuration.

Files:
- src/app/settings/page.tsx
- src/components/settings/IntegrationCards.tsx
- src/components/settings/GlobalRulesForm.tsx
- src/components/settings/AiSettingsForm.tsx
- src/components/settings/ServiceStatusCard.tsx

Context:
- Include Etsy, Shopify, Printify, Gelato, and local LLM integration cards.
- Include AI settings for writing tone, description length, creativity, and language.
- Include placeholder local LLM service status.
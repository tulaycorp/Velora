# Tasks

## ~~[High] Initialize Professional Front-End Foundation~~

Description and acceptance criteria.

Initialize the front-end project from an empty repository and create the foundation for a polished SaaS dashboard.

Files:
- package.json
- index.html or app entry files depending on framework
- src/main.tsx or equivalent
- src/App.tsx or equivalent
- src/index.css
- tailwind.config.ts or equivalent
- postcss.config.js or equivalent
- tsconfig.json
- src/lib/utils.ts
- src/lib/types.ts
- src/lib/mock-data.ts

Context:
- Use React and TypeScript.
- Use Tailwind CSS.
- Use shadcn/ui or equivalent component primitives if practical.
- Use lucide-react for icons.
- Use Recharts for charts.
- Set up a professional visual baseline.
- Do not create a wireframe-style app.
- Do not add backend logic.
- Do not add real provider integrations.

Acceptance criteria:
- App installs and runs locally.
- Tailwind is configured.
- TypeScript is configured.
- Mock data and shared types exist.
- Basic routing is ready.
- The app has a professional baseline style.

## [High] Build App Shell and Navigation

Description and acceptance criteria.

Create the shared dashboard layout used by all pages.

Files:
- src/components/layout/AppShell.tsx
- src/components/layout/Sidebar.tsx
- src/components/layout/PageHeader.tsx
- src/components/layout/TopBar.tsx
- src/components/layout/StatusPill.tsx
- src/routes or app route files depending on framework

Context:
- Sidebar should include:
  - Dashboard
  - Inventory
  - Listing Studio
  - Marketing
  - Orders
  - Analytics
  - Settings
- Include Tulay branding.
- Include store/account area in the sidebar footer.
- Include a top bar with search, sync status, and primary page action area.
- The layout must feel like a polished SaaS dashboard, not a wireframe.
- The root route should show or redirect to Dashboard.

Acceptance criteria:
- All navigation items work.
- Active page state is visible.
- Layout is responsive enough for common desktop sizes.
- Shared page header supports title, subtitle, and actions.
- No page should be visually bare.

## [High] Create Design System Components

Description and acceptance criteria.

Create reusable UI components for the dashboard.

Files:
- src/components/ui/MetricCard.tsx
- src/components/ui/SectionCard.tsx
- src/components/ui/DataTable.tsx
- src/components/ui/StatusBadge.tsx
- src/components/ui/EmptyState.tsx
- src/components/ui/PageActionButton.tsx
- src/components/ui/FilterBar.tsx
- src/components/ui/SearchInput.tsx

Context:
- Components should be generic and reusable across pages.
- Use consistent spacing, borders, shadows, typography, and status colors.
- The interface should look near-production.

Acceptance criteria:
- Components are typed.
- Components are reusable.
- Components are used by at least the Dashboard and Inventory pages.
- StatusBadge supports success, warning, danger, neutral, info, and processing variants.

## [High] Build Dashboard Page

Description and acceptance criteria.

Create the main dashboard overview page using realistic mock data.

Files:
- src/pages/DashboardPage.tsx or src/app/dashboard/page.tsx
- src/components/dashboard/RevenueTrendChart.tsx
- src/components/dashboard/OperationsAlertCard.tsx
- src/components/dashboard/TopProductsList.tsx
- src/components/dashboard/RecentActivityFeed.tsx
- src/components/dashboard/ChannelHealthGrid.tsx
- src/lib/mock-data.ts

Context:
- This page should feel like the executive overview of the product.
- Use ecommerce/POD-specific mock data.
- Include Etsy, Shopify, Printify, Gelato, and Local LLM status.
- Use Recharts for the revenue chart.

Acceptance criteria:
- Includes metric cards for revenue, net profit, orders, and average order value or conversion rate.
- Includes revenue chart by channel.
- Includes operational alert cards.
- Includes top-selling products.
- Includes recent activity.
- Includes channel health/status summary.
- Looks polished and complete.

## [High] Build Inventory Page

Description and acceptance criteria.

Create a professional inventory management page.

Files:
- src/pages/InventoryPage.tsx or src/app/inventory/page.tsx
- src/components/inventory/InventoryTable.tsx
- src/components/inventory/ProductThumbnail.tsx
- src/components/inventory/PlatformBadgeGroup.tsx
- src/components/inventory/SyncStatusBadge.tsx
- src/components/inventory/InventoryFilters.tsx

Context:
- Inventory is the internal product catalog.
- Products may be published to Etsy and/or Shopify.
- Products may be linked to Printify or Gelato fulfillment.

Acceptance criteria:
- Includes search.
- Includes filters for channel, stock state, and sync status.
- Includes product thumbnail, title, SKU, category, price, stock, platform status, sync status, performance, and actions.
- Includes realistic status badges.
- Table is readable and professional.
- Uses mock data only.

## [High] Build Listing Studio Page

Description and acceptance criteria.

Create the listing creation and AI optimization interface.

Files:
- src/pages/ListingStudioPage.tsx or src/app/listing-studio/page.tsx
- src/components/listing/MediaUploader.tsx
- src/components/listing/ListingForm.tsx
- src/components/listing/PlatformSettingsTabs.tsx
- src/components/listing/AiAssistantPanel.tsx
- src/components/listing/SeoScoreCard.tsx
- src/components/listing/PublishingReadinessPanel.tsx
- src/components/listing/TagEditor.tsx

Context:
- Listing Studio is where the store manager creates or optimizes listings.
- AI actions must be placeholders only.
- No local LLM API calls yet.

Acceptance criteria:
- Includes product media upload area.
- Includes title, description, price, quantity, SKU, and tags fields.
- Includes platform-specific tabs for General, Etsy, and Shopify.
- Includes AI assistant actions:
  - Generate title
  - Generate description
  - Generate tags
  - Optimize SEO
- Includes SEO score and issue breakdown.
- Includes publishing readiness for Etsy and Shopify.
- Includes realistic draft/publish action area.
- Looks like a professional listing editor, not a form dump.

## [Medium] Build Marketing & SEO Page

Description and acceptance criteria.

Create the marketing and SEO optimization page.

Files:
- src/pages/MarketingPage.tsx or src/app/marketing/page.tsx
- src/components/marketing/KeywordRankingChart.tsx
- src/components/marketing/KeywordSummaryCards.tsx
- src/components/marketing/OptimizationOpportunitiesTable.tsx
- src/components/marketing/SeoIssueBadge.tsx

Context:
- This page tracks listing ranking and optimization issues.
- AI fix actions are placeholders.

Acceptance criteria:
- Includes keyword ranking chart.
- Includes keyword summary cards.
- Includes optimization opportunities table.
- Includes issue badges.
- Includes placeholder “Fix with AI” actions.
- Uses realistic mock data.

## [Medium] Build Orders & Fulfillment Page

Description and acceptance criteria.

Create the orders and POD workflow page.

Files:
- src/pages/OrdersPage.tsx or src/app/orders/page.tsx
- src/components/orders/OrderStats.tsx
- src/components/orders/OrdersTable.tsx
- src/components/orders/OrderFilters.tsx
- src/components/orders/PodWorkflowPanel.tsx
- src/components/orders/PodStatusBadge.tsx

Context:
- Orders come from Etsy and Shopify.
- Fulfillment may be routed to Printify or Gelato.
- All provider actions are placeholders.

Acceptance criteria:
- Includes order summary metric cards.
- Includes search and filters.
- Includes order table with order ID, date, customer, product, quantity, total, channel, order status, POD provider, POD status, and actions.
- Includes POD workflow queue.
- Includes Trigger Workflow, Track, and Update placeholder actions.
- Uses mock data only.

## [Medium] Build Analytics & Finance Page

Description and acceptance criteria.

Create the analytics and finance page.

Files:
- src/pages/AnalyticsPage.tsx or src/app/analytics/page.tsx
- src/components/analytics/SalesByChannelChart.tsx
- src/components/analytics/ExpenseBreakdownChart.tsx
- src/components/analytics/ProductProfitabilityTable.tsx
- src/components/analytics/ChannelComparisonTable.tsx
- src/components/analytics/FinancialMetricGrid.tsx

Context:
- This page shows business performance and profitability.
- Use mock data only.

Acceptance criteria:
- Includes gross revenue, total expenses, net profit, and profit margin.
- Includes sales by channel chart.
- Includes expense breakdown chart.
- Includes product profitability table.
- Includes channel comparison.
- Includes realistic month-over-month deltas.

## [Medium] Build Settings Page

Description and acceptance criteria.

Create the settings page for integrations, global rules, and AI configuration.

Files:
- src/pages/SettingsPage.tsx or src/app/settings/page.tsx
- src/components/settings/IntegrationCards.tsx
- src/components/settings/GlobalRulesForm.tsx
- src/components/settings/AiSettingsForm.tsx
- src/components/settings/AutomationRulesPanel.tsx
- src/components/settings/ServiceStatusCard.tsx

Context:
- Settings should show the future integration surface.
- All connection buttons are placeholders.

Acceptance criteria:
- Includes Etsy, Shopify, Printify, Gelato, and Local LLM cards.
- Includes connection status for each provider.
- Includes global listing rules.
- Includes inventory sync rules.
- Includes pricing/rounding rules.
- Includes AI writing tone, description length, creativity, language, brand voice, and custom instructions.
- No real connection logic.

## [Medium] Add App-Wide Polish Pass

Description and acceptance criteria.

Improve the app so it feels cohesive and near-production.

Files:
- All front-end page and component files.

Context:
- This is not for adding features.
- This is for visual consistency and UX quality.

Acceptance criteria:
- Consistent spacing.
- Consistent card styles.
- Consistent table density.
- Consistent empty states.
- Consistent button hierarchy.
- Consistent status badges.
- No bare placeholder pages.
- No obvious wireframe sections.
- No lorem ipsum.
- No unused major components.

## [Low] Add Front-End Quality Checks

Description and acceptance criteria.

Add basic quality checks for the front-end.

Files:
- package.json
- relevant config files
- optional test files

Context:
- Keep this lightweight.

Acceptance criteria:
- Add lint script if not present.
- Add typecheck script if not present.
- Add build script if not present.
- Ensure all scripts pass.

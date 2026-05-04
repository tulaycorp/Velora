import type {
  ActivityItem,
  AnalyticsMetric,
  ChannelComparisonRow,
  ChannelHealth,
  DashboardAlert,
  ExpenseSlice,
  IntegrationService,
  KeywordMetric,
  ListingDraft,
  OpportunityItem,
  Order,
  PodJob,
  Product,
  RevenuePoint,
  Store,
} from "@/lib/types";

export const storeProfile: Store = {
  id: "store_velora_01",
  name: "Velora Atelier",
  owner: "Angela Cruz",
  timezone: "Asia/Manila",
  currency: "USD",
  channels: ["etsy", "shopify"],
  podProviders: ["printify", "gelato"],
  aiStatus: "ready",
  syncStatus: "syncing",
};

export const integrationStatuses: IntegrationService[] = [
  {
    id: "etsy",
    name: "Etsy",
    category: "channel",
    status: "connected",
    description: "Listings, orders, and pricing sync every 30 minutes.",
    lastSync: "4 minutes ago",
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "channel",
    status: "connected",
    description: "Inventory and order routing connected to the flagship shop.",
    lastSync: "2 minutes ago",
  },
  {
    id: "printify",
    name: "Printify",
    category: "fulfillment",
    status: "needs_attention",
    description: "One catalog mapping needs confirmation before the next publish.",
    lastSync: "19 minutes ago",
  },
  {
    id: "gelato",
    name: "Gelato",
    category: "fulfillment",
    status: "connected",
    description: "Fallback routing active for apparel and wall art SKUs.",
    lastSync: "8 minutes ago",
  },
  {
    id: "local-llm",
    name: "Local LLM",
    category: "ai",
    status: "placeholder",
    description: "Draft generation interface prepared. Model connection arrives later.",
    lastSync: "Not configured",
  },
];

export const dashboardMetrics: AnalyticsMetric[] = [
  {
    id: "gross-revenue",
    label: "Gross revenue",
    value: "$84,290",
    delta: "+12.4%",
    trend: "up",
    tone: "success",
  },
  {
    id: "net-profit",
    label: "Net profit",
    value: "$26,940",
    delta: "+8.1%",
    trend: "up",
  },
  {
    id: "orders",
    label: "Orders",
    value: "1,284",
    delta: "+6.8%",
    trend: "up",
  },
  {
    id: "aov",
    label: "Average order value",
    value: "$65.64",
    delta: "-1.6%",
    trend: "down",
    tone: "warning",
  },
];

export const revenueSeries: RevenuePoint[] = [
  { label: "Jan", etsy: 9200, shopify: 7100 },
  { label: "Feb", etsy: 10400, shopify: 7400 },
  { label: "Mar", etsy: 11280, shopify: 7930 },
  { label: "Apr", etsy: 11940, shopify: 8420 },
  { label: "May", etsy: 13120, shopify: 9060 },
  { label: "Jun", etsy: 12760, shopify: 9720 },
];

export const dashboardAlerts: DashboardAlert[] = [
  {
    id: "alert-stock",
    title: "Low stock on best-sellers",
    description: "Three hoodie variants will fall below safety stock within 48 hours.",
    tone: "warning",
  },
  {
    id: "alert-sync",
    title: "Printify catalog mapping needs review",
    description: "One SKU bundle failed to map to the selected blueprint after a size update.",
    tone: "danger",
  },
  {
    id: "alert-pod",
    title: "Two POD jobs are aging beyond SLA",
    description: "Reroute to Gelato if production is not accepted within the next cycle.",
    tone: "info",
  },
];

export const channelHealth: ChannelHealth[] = [
  { name: "Etsy", status: "connected", detail: "Listings healthy" },
  { name: "Shopify", status: "connected", detail: "Syncing inventory" },
  { name: "Printify", status: "needs_attention", detail: "1 mapping issue" },
  { name: "Gelato", status: "connected", detail: "Fallback ready" },
  { name: "Local LLM", status: "placeholder", detail: "Interface prepared" },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "activity-1",
    title: "Holiday tote bundle published to Etsy",
    detail: "Pricing and tags were synced from Listing Studio.",
    timestamp: "12 minutes ago",
  },
  {
    id: "activity-2",
    title: "Shopify order #SO-4821 routed to Gelato",
    detail: "Fallback automation assigned after Printify capacity warning.",
    timestamp: "29 minutes ago",
  },
  {
    id: "activity-3",
    title: "Inventory sync completed",
    detail: "27 products refreshed across both storefronts.",
    timestamp: "1 hour ago",
  },
];

export const products: Product[] = [
  {
    id: "prd-01",
    title: "Studio Bloom Hoodie",
    sku: "VEL-HOOD-BLOOM",
    category: "Apparel",
    price: 48,
    stock: 21,
    revenueLast30Days: 8420,
    unitsSoldLast30Days: 146,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    channels: ["etsy", "shopify"],
    podProvider: "printify",
    syncStatus: "syncing",
    publishingStatus: "published",
  },
  {
    id: "prd-02",
    title: "Coastal Sketch Poster",
    sku: "VEL-POST-COAST",
    category: "Wall Art",
    price: 34,
    stock: 54,
    revenueLast30Days: 6210,
    unitsSoldLast30Days: 183,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
    channels: ["etsy"],
    podProvider: "gelato",
    syncStatus: "synced",
    publishingStatus: "published",
  },
  {
    id: "prd-03",
    title: "Weekend Market Tote",
    sku: "VEL-TOTE-MARKET",
    category: "Accessories",
    price: 28,
    stock: 14,
    revenueLast30Days: 4890,
    unitsSoldLast30Days: 174,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80",
    channels: ["etsy", "shopify"],
    podProvider: "printify",
    syncStatus: "failed",
    publishingStatus: "needs_review",
  },
  {
    id: "prd-04",
    title: "Candlelight Recipe Journal",
    sku: "VEL-JOURNAL-RECIPE",
    category: "Stationery",
    price: 22,
    stock: 87,
    revenueLast30Days: 3720,
    unitsSoldLast30Days: 121,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    channels: ["shopify"],
    syncStatus: "queued",
    publishingStatus: "draft",
  },
];

export const listingDrafts: ListingDraft[] = [
  {
    id: "lst-01",
    productId: "prd-03",
    title: "Weekend Market Tote Bag for Farmers Market Runs",
    description:
      "Durable cotton carryall with reinforced straps and an illustrated front print for weekend errands.",
    price: 28,
    quantity: 140,
    sku: "VEL-TOTE-MARKET",
    tags: ["market tote", "gift for her", "weekend bag", "cotton tote"],
    seoScore: 82,
    seoIssues: ["Add one more long-tail keyword", "Increase image count"],
    channels: ["etsy", "shopify"],
    publishingStatus: "needs_review",
  },
  {
    id: "lst-02",
    productId: "prd-04",
    title: "Recipe Journal with Warm Linen Cover",
    description:
      "Guided journal template for family recipes, kitchen notes, and seasonal hosting ideas.",
    price: 22,
    quantity: 200,
    sku: "VEL-JOURNAL-RECIPE",
    tags: ["recipe book", "kitchen journal", "hostess gift"],
    seoScore: 76,
    seoIssues: ["Title could be stronger", "Tag coverage is light"],
    channels: ["shopify"],
    publishingStatus: "draft",
  },
];

export const orders: Order[] = [
  {
    id: "ET-10841",
    customer: "Mia Santos",
    date: "2026-05-03",
    productTitle: "Studio Bloom Hoodie",
    quantity: 2,
    total: 96,
    channel: "etsy",
    orderStatus: "processing",
    podProvider: "printify",
    podStatus: "queued",
  },
  {
    id: "SH-4821",
    customer: "Noah Rivera",
    date: "2026-05-03",
    productTitle: "Coastal Sketch Poster",
    quantity: 1,
    total: 34,
    channel: "shopify",
    orderStatus: "fulfilled",
    podProvider: "gelato",
    podStatus: "shipped",
  },
  {
    id: "ET-10829",
    customer: "Ella Mendoza",
    date: "2026-05-02",
    productTitle: "Weekend Market Tote",
    quantity: 3,
    total: 84,
    channel: "etsy",
    orderStatus: "attention",
    podProvider: "printify",
    podStatus: "failed",
  },
];

export const podJobs: PodJob[] = [
  {
    id: "POD-891",
    orderId: "ET-10841",
    provider: "printify",
    productTitle: "Studio Bloom Hoodie",
    stage: "queued",
    eta: "Awaiting acceptance",
  },
  {
    id: "POD-892",
    orderId: "ET-10829",
    provider: "printify",
    productTitle: "Weekend Market Tote",
    stage: "proofing",
    eta: "Artwork mismatch review",
  },
  {
    id: "POD-893",
    orderId: "SH-4821",
    provider: "gelato",
    productTitle: "Coastal Sketch Poster",
    stage: "shipped",
    eta: "Tracking available",
  },
];

export const keywordMetrics: KeywordMetric[] = [
  { keyword: "linen recipe journal", rank: 4, trend: "+2", channel: "shopify" },
  { keyword: "farmers market tote", rank: 7, trend: "+1", channel: "etsy" },
  { keyword: "floral hoodie gift", rank: 11, trend: "-1", channel: "etsy" },
];

export const marketingOpportunities: OpportunityItem[] = [
  {
    id: "opp-1",
    listing: "Weekend Market Tote",
    issue: "Missing supporting tags",
    impact: "High",
    channel: "etsy",
  },
  {
    id: "opp-2",
    listing: "Recipe Journal",
    issue: "Title length below category leaders",
    impact: "Medium",
    channel: "shopify",
  },
  {
    id: "opp-3",
    listing: "Studio Bloom Hoodie",
    issue: "Only 3 product images live",
    impact: "Medium",
    channel: "etsy",
  },
];

export const financeMetrics: AnalyticsMetric[] = [
  {
    id: "expenses",
    label: "Expenses",
    value: "$57,350",
    delta: "+5.2%",
    trend: "up",
  },
  {
    id: "margin",
    label: "Profit margin",
    value: "31.9%",
    delta: "+1.1%",
    trend: "up",
    tone: "success",
  },
];

export const expenseBreakdown: ExpenseSlice[] = [
  { name: "COGS", value: 24800 },
  { name: "Ads", value: 12100 },
  { name: "Shipping", value: 9360 },
  { name: "Apps", value: 5090 },
  { name: "Refunds", value: 6000 },
];

export const channelComparison: ChannelComparisonRow[] = [
  {
    channel: "etsy",
    grossRevenue: "$49,780",
    conversion: "4.8%",
    averageOrderValue: "$61.20",
  },
  {
    channel: "shopify",
    grossRevenue: "$34,510",
    conversion: "3.7%",
    averageOrderValue: "$71.90",
  },
];

export type SalesChannel = "etsy" | "shopify";

export type PodProvider = "printify" | "gelato";

export type IntegrationStatus =
  | "connected"
  | "disconnected"
  | "needs_attention"
  | "placeholder";

export type SyncStatus =
  | "synced"
  | "syncing"
  | "failed"
  | "queued"
  | "not_synced";

export type PublishingStatus =
  | "draft"
  | "ready"
  | "published"
  | "failed"
  | "needs_review";

export type PodStatus =
  | "not_required"
  | "queued"
  | "in_production"
  | "shipped"
  | "failed";

export type AiServiceStatus =
  | "ready"
  | "training"
  | "offline"
  | "placeholder";

export interface Store {
  id: string;
  name: string;
  owner: string;
  timezone: string;
  currency: string;
  channels: SalesChannel[];
  podProviders: PodProvider[];
  aiStatus: AiServiceStatus;
  syncStatus: SyncStatus;
}

export interface Product {
  id: string;
  title: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  revenueLast30Days: number;
  unitsSoldLast30Days: number;
  image: string;
  channels: SalesChannel[];
  podProvider?: PodProvider;
  syncStatus: SyncStatus;
  publishingStatus: PublishingStatus;
}

export interface ListingDraft {
  id: string;
  productId: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  sku: string;
  tags: string[];
  seoScore: number;
  seoIssues: string[];
  channels: SalesChannel[];
  publishingStatus: PublishingStatus;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  productTitle: string;
  quantity: number;
  total: number;
  channel: SalesChannel;
  orderStatus: "paid" | "processing" | "fulfilled" | "attention";
  podProvider?: PodProvider;
  podStatus: PodStatus;
}

export interface PodJob {
  id: string;
  orderId: string;
  provider: PodProvider;
  productTitle: string;
  stage: "queued" | "proofing" | "in_production" | "packaged" | "shipped";
  eta: string;
}

export interface AnalyticsMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "neutral";
  tone?: "default" | "success" | "warning";
}

export interface IntegrationService {
  id: string;
  name: string;
  category: "channel" | "fulfillment" | "ai";
  status: IntegrationStatus;
  description: string;
  lastSync: string;
}

export interface DashboardAlert {
  id: string;
  title: string;
  description: string;
  tone: "warning" | "danger" | "info";
}

export interface RevenuePoint {
  label: string;
  etsy: number;
  shopify: number;
}

export interface ChannelHealth {
  name: string;
  status: IntegrationStatus;
  detail: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
}

export interface KeywordMetric {
  keyword: string;
  rank: number;
  trend: string;
  channel: SalesChannel;
}

export interface OpportunityItem {
  id: string;
  listing: string;
  issue: string;
  impact: string;
  channel: SalesChannel;
}

export interface ExpenseSlice {
  name: string;
  value: number;
}

export interface ChannelComparisonRow {
  channel: SalesChannel;
  grossRevenue: string;
  conversion: string;
  averageOrderValue: string;
}

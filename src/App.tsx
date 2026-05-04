import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/app-shell";
import { AnalyticsPage } from "@/pages/analytics-page";
import { DashboardPage } from "@/pages/dashboard-page";
import { InventoryPage } from "@/pages/inventory-page";
import { ListingStudioPage } from "@/pages/listing-studio-page";
import { MarketingPage } from "@/pages/marketing-page";
import { OrdersPage } from "@/pages/orders-page";
import { SettingsPage } from "@/pages/settings-page";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/listing-studio" element={<ListingStudioPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AppShell>
  );
}

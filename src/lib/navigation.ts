import {
  BarChart3,
  Boxes,
  Gauge,
  Megaphone,
  PackageSearch,
  Settings,
  ShoppingCart,
} from "lucide-react";

export const navigationItems = [
  { to: "/dashboard", label: "Dashboard", icon: Gauge },
  { to: "/inventory", label: "Inventory", icon: Boxes },
  { to: "/listing-studio", label: "Listing Studio", icon: PackageSearch },
  { to: "/marketing", label: "Marketing", icon: Megaphone },
  { to: "/orders", label: "Orders", icon: ShoppingCart },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

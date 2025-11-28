import type { LucideIcon } from 'lucide-react';

// Menu Item for Sidebar
export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

// Sidebar Props
export interface SidebarProps {
  menuItems: MenuItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

// Header Props
export interface HeaderProps {
  title: string;
  subtitle?: string;
}

// Stat Card Props
export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

// Data Table Column
export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

// Data Table Props
export interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
}

// Chart Data
export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

// Chart Section Props
export interface ChartSectionProps {
  title: string;
  data: ChartData[];
  type: 'line' | 'bar' | 'area';
}

// Dashboard Data Structure
export interface DashboardData {
  stats: StatData[];
  tableData: TableRow[];
  chartData: ChartData[];
}

// Stat Data
export interface StatData {
  id: string;
  title: string;
  value: string | number;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

// Table Row
export interface TableRow {
  id: string;
  [key: string]: any;
}

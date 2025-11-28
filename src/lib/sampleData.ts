import {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
  LayoutDashboard,
  BarChart3,
  Settings,
  Globe,
  Kanban,
} from 'lucide-react';
import type { MenuItem, StatData, TableRow, ChartData } from '@/types';

// Sample menu items for sidebar
export const sampleMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    id: 'reports',
    label: 'Global Network',
    icon: Globe,
    href: '/reports',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: Kanban,
    href: '/projects',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

// Sample stat data for stat cards
export const sampleStats: StatData[] = [
  {
    id: '1',
    title: 'Total Users',
    value: '2,543',
    icon: 'Users',
    trend: {
      value: 12,
      isPositive: true,
    },
    description: 'Active users this month',
  },
  {
    id: '2',
    title: 'Revenue',
    value: '$45,231',
    icon: 'DollarSign',
    trend: {
      value: 8,
      isPositive: true,
    },
    description: 'Total revenue generated',
  },
  {
    id: '3',
    title: 'Active Sessions',
    value: '1,234',
    icon: 'Activity',
    trend: {
      value: 3,
      isPositive: false,
    },
    description: 'Current active sessions',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: '3.24%',
    icon: 'TrendingUp',
    trend: {
      value: 5,
      isPositive: true,
    },
    description: 'Average conversion rate',
  },
];

// Map icon names to actual icon components
export const iconMap = {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
};

// Sample table data
export const sampleTableData: TableRow[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
    role: 'Admin',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Active',
    role: 'User',
    date: '2024-01-18',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'Inactive',
    role: 'User',
    date: '2024-01-20',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    status: 'Active',
    role: 'Moderator',
    date: '2024-01-22',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    status: 'Active',
    role: 'User',
    date: '2024-01-25',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    status: 'Active',
    role: 'Admin',
    date: '2024-02-01',
  },
  {
    id: '7',
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    status: 'Inactive',
    role: 'User',
    date: '2024-02-05',
  },
  {
    id: '8',
    name: 'Fiona Green',
    email: 'fiona@example.com',
    status: 'Active',
    role: 'User',
    date: '2024-02-10',
  },
];

// Sample chart data
export const sampleChartData: ChartData[] = [
  { name: 'Jan', value: 400, revenue: 2400 },
  { name: 'Feb', value: 300, revenue: 1398 },
  { name: 'Mar', value: 600, revenue: 9800 },
  { name: 'Apr', value: 800, revenue: 3908 },
  { name: 'May', value: 500, revenue: 4800 },
  { name: 'Jun', value: 700, revenue: 3800 },
  { name: 'Jul', value: 900, revenue: 4300 },
  { name: 'Aug', value: 1100, revenue: 5200 },
  { name: 'Sep', value: 950, revenue: 4900 },
  { name: 'Oct', value: 1200, revenue: 6100 },
  { name: 'Nov', value: 1050, revenue: 5500 },
  { name: 'Dec', value: 1300, revenue: 7200 },
];

// Table columns definition
export const tableColumns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' },
  { key: 'role', label: 'Role' },
  { key: 'date', label: 'Date' },
];

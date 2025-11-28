import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StatCard } from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  MousePointer,
  Clock,
  Target,
} from 'lucide-react';
import { sampleMenuItems } from '@/lib/sampleData';

export function Analytics() {
  // Advanced metrics data
  const advancedStats = [
    {
      id: '1',
      title: 'Page Views',
      value: '124,543',
      icon: Eye,
      trend: { value: 18, isPositive: true },
      description: 'Total page views this month',
    },
    {
      id: '2',
      title: 'Avg. Session Duration',
      value: '4m 32s',
      icon: Clock,
      trend: { value: 12, isPositive: true },
      description: 'Average time per session',
    },
    {
      id: '3',
      title: 'Click Rate',
      value: '3.8%',
      icon: MousePointer,
      trend: { value: 5, isPositive: false },
      description: 'Click-through rate',
    },
    {
      id: '4',
      title: 'Goal Completion',
      value: '87.2%',
      icon: Target,
      trend: { value: 9, isPositive: true },
      description: 'Goals achieved',
    },
    {
      id: '5',
      title: 'New Users',
      value: '8,234',
      icon: Users,
      trend: { value: 23, isPositive: true },
      description: 'New registrations',
    },
    {
      id: '6',
      title: 'Revenue',
      value: '$89,432',
      icon: DollarSign,
      trend: { value: 15, isPositive: true },
      description: 'Total revenue',
    },
    {
      id: '7',
      title: 'Orders',
      value: '1,543',
      icon: ShoppingCart,
      trend: { value: 8, isPositive: true },
      description: 'Total orders',
    },
    {
      id: '8',
      title: 'Conversion Rate',
      value: '4.2%',
      icon: TrendingUp,
      trend: { value: 3, isPositive: true },
      description: 'Overall conversion',
    },
  ];

  // Revenue trend data (12 months)
  const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 320, users: 1200 },
    { month: 'Feb', revenue: 52000, orders: 380, users: 1450 },
    { month: 'Mar', revenue: 48000, orders: 350, users: 1300 },
    { month: 'Apr', revenue: 61000, orders: 420, users: 1680 },
    { month: 'May', revenue: 55000, orders: 390, users: 1520 },
    { month: 'Jun', revenue: 67000, orders: 480, users: 1890 },
    { month: 'Jul', revenue: 72000, orders: 520, users: 2100 },
    { month: 'Aug', revenue: 68000, orders: 490, users: 1950 },
    { month: 'Sep', revenue: 79000, orders: 560, users: 2300 },
    { month: 'Oct', revenue: 85000, orders: 610, users: 2450 },
    { month: 'Nov', revenue: 82000, orders: 580, users: 2280 },
    { month: 'Dec', revenue: 95000, orders: 680, users: 2650 },
  ];

  // Traffic sources
  const trafficData = [
    { name: 'Organic Search', value: 4200, percentage: 42 },
    { name: 'Direct', value: 2800, percentage: 28 },
    { name: 'Social Media', value: 1800, percentage: 18 },
    { name: 'Referral', value: 800, percentage: 8 },
    { name: 'Email', value: 400, percentage: 4 },
  ];

  // Device breakdown
  const deviceData = [
    { name: 'Desktop', value: 5500 },
    { name: 'Mobile', value: 3800 },
    { name: 'Tablet', value: 1200 },
  ];

  // Performance metrics
  const performanceData = [
    { metric: 'Speed', value: 85 },
    { metric: 'SEO', value: 92 },
    { metric: 'Accessibility', value: 88 },
    { metric: 'Best Practices', value: 90 },
    { metric: 'Performance', value: 87 },
  ];

  // Hourly activity
  const hourlyData = [
    { hour: '00:00', visits: 120 },
    { hour: '03:00', visits: 80 },
    { hour: '06:00', visits: 150 },
    { hour: '09:00', visits: 450 },
    { hour: '12:00', visits: 680 },
    { hour: '15:00', visits: 720 },
    { hour: '18:00', visits: 590 },
    { hour: '21:00', visits: 380 },
  ];

  const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar menuItems={sampleMenuItems} />

      <div className="flex-1 pl-64">
        <Header
          title="Advanced Analytics"
          subtitle="Comprehensive insights and performance metrics"
        />

        <main className="p-6 space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advancedStats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                trend={stat.trend}
                description={stat.description}
              />
            ))}
          </div>

          {/* Revenue & Growth Trends */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8b5cf6"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orders & Users Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      name="Orders"
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Users"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Sources & Device Breakdown */}
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9ca3af" />
                    <YAxis dataKey="name" type="category" stroke="#9ca3af" width={120} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Radar & Hourly Activity */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={performanceData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="metric" stroke="#9ca3af" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9ca3af" />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hourly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="visits"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers Table */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { page: '/products', views: 12543, bounce: '32%', avgTime: '3m 45s' },
                  { page: '/blog', views: 9821, bounce: '28%', avgTime: '5m 12s' },
                  { page: '/about', views: 7654, bounce: '45%', avgTime: '2m 18s' },
                  { page: '/contact', views: 5432, bounce: '38%', avgTime: '1m 52s' },
                  { page: '/pricing', views: 4321, bounce: '25%', avgTime: '4m 08s' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.page}</p>
                      <p className="text-sm text-muted-foreground">{item.views.toLocaleString()} views</p>
                    </div>
                    <div className="flex gap-8 text-sm">
                      <div>
                        <p className="text-muted-foreground">Bounce Rate</p>
                        <p className="font-medium">{item.bounce}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg. Time</p>
                        <p className="font-medium">{item.avgTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

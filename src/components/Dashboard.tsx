import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StatCard } from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  ZAxis,
  Cell,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList,
} from 'recharts';
import {
  Zap,
  Users,
  ShoppingBag,
  CreditCard,
  Smartphone,
  Laptop,
  Tablet,
} from 'lucide-react';
import { sampleMenuItems } from '@/lib/sampleData';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleSystem from './ParticleBackground';

export function Dashboard() {
  // Enhanced stats with new metrics
  const dashboardStats = [
    {
      id: '1',
      title: 'Total Revenue',
      value: '$124,592',
      icon: CreditCard,
      trend: { value: 18.2, isPositive: true },
      description: '+$12,450 from last month',
    },
    {
      id: '2',
      title: 'Active Users',
      value: '8,549',
      icon: Users,
      trend: { value: 12.5, isPositive: true },
      description: '1,234 new this week',
    },
    {
      id: '3',
      title: 'Total Orders',
      value: '3,842',
      icon: ShoppingBag,
      trend: { value: 8.1, isPositive: true },
      description: '456 pending orders',
    },
    {
      id: '4',
      title: 'Engagement Rate',
      value: '68.4%',
      icon: Zap,
      trend: { value: 3.2, isPositive: false },
      description: 'Avg. session: 5m 32s',
    },
  ];

  // Sales funnel data
  const funnelData = [
    { name: 'Website Visits', value: 10000, fill: '#8b5cf6' },
    { name: 'Product Views', value: 6500, fill: '#7c3aed' },
    { name: 'Add to Cart', value: 3200, fill: '#6d28d9' },
    { name: 'Checkout', value: 1800, fill: '#5b21b6' },
    { name: 'Purchase', value: 1200, fill: '#4c1d95' },
  ];

  // Multi-metric comparison data
  const comparisonData = [
    { month: 'Jan', revenue: 45000, orders: 320, customers: 280, satisfaction: 85 },
    { month: 'Feb', revenue: 52000, orders: 380, customers: 340, satisfaction: 87 },
    { month: 'Mar', revenue: 48000, orders: 350, customers: 310, satisfaction: 84 },
    { month: 'Apr', revenue: 61000, orders: 420, customers: 390, satisfaction: 89 },
    { month: 'May', revenue: 55000, orders: 390, customers: 350, satisfaction: 86 },
    { month: 'Jun', revenue: 67000, orders: 480, customers: 430, satisfaction: 91 },
  ];

  // Scatter plot data - Customer Lifetime Value vs Engagement
  const scatterData = [
    { engagement: 20, ltv: 1200, customers: 45 },
    { engagement: 35, ltv: 2400, customers: 78 },
    { engagement: 50, ltv: 3800, customers: 120 },
    { engagement: 65, ltv: 5200, customers: 95 },
    { engagement: 80, ltv: 7500, customers: 68 },
    { engagement: 90, ltv: 9800, customers: 42 },
  ];

  // Product category performance (Treemap)
  const categoryData = [
    { name: 'Electronics', size: 45000, fill: '#8b5cf6' },
    { name: 'Fashion', size: 38000, fill: '#06b6d4' },
    { name: 'Home & Garden', size: 28000, fill: '#10b981' },
    { name: 'Sports', size: 22000, fill: '#f59e0b' },
    { name: 'Books', size: 18000, fill: '#ef4444' },
    { name: 'Toys', size: 15000, fill: '#ec4899' },
  ];

  // Device usage over time
  const deviceTrendData = [
    { date: 'Mon', desktop: 1200, mobile: 1800, tablet: 400 },
    { date: 'Tue', desktop: 1400, mobile: 2100, tablet: 450 },
    { date: 'Wed', desktop: 1100, mobile: 1900, tablet: 380 },
    { date: 'Thu', desktop: 1600, mobile: 2400, tablet: 520 },
    { date: 'Fri', desktop: 1800, mobile: 2800, tablet: 600 },
    { date: 'Sat', desktop: 900, mobile: 3200, tablet: 450 },
    { date: 'Sun', desktop: 800, mobile: 2900, tablet: 400 },
  ];

  // Real-time activity feed
  const recentActivities = [
    { user: 'Sarah Johnson', action: 'Completed purchase', amount: '$234.00', time: '2 min ago', type: 'purchase' },
    { user: 'Mike Chen', action: 'New registration', amount: null, time: '5 min ago', type: 'signup' },
    { user: 'Emma Wilson', action: 'Added to cart', amount: '$89.99', time: '8 min ago', type: 'cart' },
    { user: 'James Brown', action: 'Completed purchase', amount: '$456.50', time: '12 min ago', type: 'purchase' },
    { user: 'Lisa Anderson', action: 'Started checkout', amount: '$178.00', time: '15 min ago', type: 'checkout' },
  ];

  return (
    <div className="flex min-h-screen bg-background relative">
      {/* 3D Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleSystem />
          </Suspense>
        </Canvas>
      </div>

      <Sidebar menuItems={sampleMenuItems} />

      <div className="flex-1 pl-64 relative z-10">
        <Header
          title="Dashboard Overview"
          subtitle="Real-time insights and performance metrics"
        />

        <main className="p-6 space-y-6">
          {/* Stats Grid with animations */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardStats.map((stat, index) => (
              <div
                key={stat.id}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
              >
                <StatCard
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  description={stat.description}
                />
              </div>
            ))}
          </div>

          {/* Main Charts Row */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Multi-Metric Composed Chart */}
            <Card className="lg:col-span-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Business Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis yAxisId="left" stroke="#9ca3af" />
                    <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      fill="#8b5cf6"
                      stroke="#8b5cf6"
                      fillOpacity={0.3}
                      name="Revenue ($)"
                    />
                    <Bar yAxisId="right" dataKey="orders" fill="#06b6d4" name="Orders" />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Satisfaction (%)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sales Funnel */}
            <Card className="hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <FunnelChart>
                    <Tooltip />
                    <Funnel dataKey="value" data={funnelData} isAnimationActive>
                      <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />
                      {funnelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Scatter Plot - Customer Value Analysis */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Customer Value vs Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      type="number"
                      dataKey="engagement"
                      name="Engagement Score"
                      stroke="#9ca3af"
                      label={{ value: 'Engagement Score', position: 'bottom', fill: '#9ca3af' }}
                    />
                    <YAxis
                      type="number"
                      dataKey="ltv"
                      name="Lifetime Value"
                      stroke="#9ca3af"
                      label={{ value: 'LTV ($)', angle: -90, position: 'left', fill: '#9ca3af' }}
                    />
                    <ZAxis type="number" dataKey="customers" range={[100, 1000]} name="Customers" />
                    <Tooltip
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Scatter name="Customer Segments" data={scatterData} fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Device Trend Stacked Area */}
            <Card className="hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Device Usage Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={deviceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="desktop"
                      stackId="1"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.8}
                      name="Desktop"
                    />
                    <Area
                      type="monotone"
                      dataKey="mobile"
                      stackId="1"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.8}
                      name="Mobile"
                    />
                    <Area
                      type="monotone"
                      dataKey="tablet"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.8}
                      name="Tablet"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Third Row */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Category Performance Treemap */}
            <Card className="lg:col-span-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Product Category Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <Treemap
                    data={categoryData}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#1f2937"
                    content={({ x, y, width, height, name, size }) => (
                      <g>
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          style={{
                            fill: categoryData.find((c) => c.name === name)?.fill || '#8b5cf6',
                            stroke: '#1f2937',
                            strokeWidth: 2,
                          }}
                        />
                        {width > 80 && height > 40 && (
                          <>
                            <text
                              x={x + width / 2}
                              y={y + height / 2 - 10}
                              textAnchor="middle"
                              fill="#fff"
                              fontSize={14}
                              fontWeight="bold"
                            >
                              {name}
                            </text>
                            <text
                              x={x + width / 2}
                              y={y + height / 2 + 10}
                              textAnchor="middle"
                              fill="#fff"
                              fontSize={12}
                            >
                              ${(size || 0).toLocaleString()}
                            </text>
                          </>
                        )}
                      </g>
                    )}
                  />
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Real-time Activity Feed */}
            <Card className="hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-[1.01] border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
              <CardHeader>
                <CardTitle>Live Activity Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-purple-500/50 cursor-pointer animate-in fade-in slide-in-from-right"
                      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 animate-pulse ${
                          activity.type === 'purchase'
                            ? 'bg-green-500 shadow-lg shadow-green-500/50'
                            : activity.type === 'signup'
                              ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                              : activity.type === 'cart'
                                ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50'
                                : 'bg-purple-500 shadow-lg shadow-purple-500/50'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">{activity.action}</p>
                        {activity.amount && (
                          <p className="text-xs font-semibold text-green-500">{activity.amount}</p>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Device Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-l-4 border-l-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:border-l-8 cursor-pointer group backdrop-blur-sm bg-slate-900/80">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Desktop Users</p>
                    <p className="text-2xl font-bold">8,400</p>
                    <p className="text-xs text-muted-foreground mt-1">42% of total traffic</p>
                  </div>
                  <Laptop className="h-12 w-12 text-purple-500 opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:border-l-8 cursor-pointer group backdrop-blur-sm bg-slate-900/80">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Mobile Users</p>
                    <p className="text-2xl font-bold">15,200</p>
                    <p className="text-xs text-muted-foreground mt-1">51% of total traffic</p>
                  </div>
                  <Smartphone className="h-12 w-12 text-cyan-500 opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:border-l-8 cursor-pointer group backdrop-blur-sm bg-slate-900/80">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tablet Users</p>
                    <p className="text-2xl font-bold">3,100</p>
                    <p className="text-xs text-muted-foreground mt-1">7% of total traffic</p>
                  </div>
                  <Tablet className="h-12 w-12 text-green-500 opacity-80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StatCard } from './StatCard';
import { DataTable } from './DataTable';
import { ChartSection } from './ChartSection';
import {
  sampleMenuItems,
  sampleStats,
  sampleTableData,
  sampleChartData,
  tableColumns,
  iconMap,
} from '@/lib/sampleData';

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar menuItems={sampleMenuItems} />

      {/* Main Content */}
      <div className="flex-1 pl-64">
        {/* Header */}
        <Header
          title="Analytics Dashboard"
          subtitle="Welcome back! Here's what's happening today."
        />

        {/* Content Area */}
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sampleStats.map((stat) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <StatCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  icon={IconComponent}
                  trend={stat.trend}
                  description={stat.description}
                />
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-2">
            <ChartSection
              title="Monthly Revenue"
              data={sampleChartData}
              type="area"
            />
            <ChartSection
              title="User Growth"
              data={sampleChartData}
              type="line"
            />
          </div>

          {/* Data Table Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Users</h2>
            <DataTable columns={tableColumns} data={sampleTableData} />
          </div>
        </main>
      </div>
    </div>
  );
}

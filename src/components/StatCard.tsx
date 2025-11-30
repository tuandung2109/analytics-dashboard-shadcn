import type { StatCardProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StatCard({ title, value, icon: Icon, trend, description }: StatCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer border-slate-700/50 backdrop-blur-sm bg-slate-900/80">
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
      </CardHeader>
      <CardContent className="relative">
        <div className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">{value}</div>
        {trend && (
          <div className="flex items-center gap-1 text-xs">
            {trend.isPositive ? (
              <ArrowUp className="h-3 w-3 text-green-500 group-hover:animate-bounce" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-500 group-hover:animate-bounce" />
            )}
            <span
              className={cn(
                "font-medium transition-all duration-300",
                trend.isPositive ? "text-green-500 group-hover:text-green-400" : "text-red-500 group-hover:text-red-400"
              )}
            >
              {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground group-hover:text-slate-300 transition-colors duration-300">from last month</span>
          </div>
        )}
        {description && (
          <p className="mt-1 text-xs text-muted-foreground group-hover:text-slate-300 transition-colors duration-300">{description}</p>
        )}
      </CardContent>
      
      {/* Bottom border glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
}

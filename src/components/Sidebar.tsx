import { useState } from 'react';
import type { SidebarProps } from '@/types';
import { cn } from '@/lib/utils';

export function Sidebar({ menuItems, activeItem: initialActiveItem, onItemClick }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(initialActiveItem || menuItems[0]?.id);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    onItemClick?.(id);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-card">
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-xl font-bold text-foreground">Dashboard</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

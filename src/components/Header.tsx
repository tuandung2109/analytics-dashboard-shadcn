import type { HeaderProps } from '@/types';
import { UserProfileDropdown } from './UserProfileDropdown';

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Title */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center gap-4">
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
}

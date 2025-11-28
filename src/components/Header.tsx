import type { HeaderProps } from '@/types';

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card">
      <div className="flex h-16 items-center px-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
}

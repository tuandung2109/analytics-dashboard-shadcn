import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

interface UserProfileDropdownProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function UserProfileDropdown({ user }: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultUser = {
    name: user?.name || 'Tuan Dung',
    email: user?.email || 'tuandung2109@gmail.com',
    avatar: user?.avatar,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleProfileClick = () => {
    console.log('Navigate to Profile');
    setIsOpen(false);
  };

  const handleSettingsClick = () => {
    console.log('Navigate to Settings');
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    console.log('Logout user');
    setIsOpen(false);
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Avatar */}
        <div className="relative">
          {defaultUser.avatar ? (
            <img
              src={defaultUser.avatar}
              alt={defaultUser.name}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-700"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white ring-2 ring-slate-700">
              {getInitials(defaultUser.name)}
            </div>
          )}
          {/* Online indicator */}
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-green-500" />
        </div>

        {/* User Info */}
        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold text-foreground">{defaultUser.name}</p>
          <p className="text-xs text-muted-foreground">{defaultUser.email}</p>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="rounded-lg border border-slate-700 bg-slate-900 shadow-2xl ring-1 ring-black ring-opacity-5">
            {/* User Info Section */}
            <div className="border-b border-slate-700 px-4 py-3">
              <p className="text-sm font-semibold text-slate-200">{defaultUser.name}</p>
              <p className="text-xs text-slate-400">{defaultUser.email}</p>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <button
                onClick={handleProfileClick}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:outline-none"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>

              <button
                onClick={handleSettingsClick}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:outline-none"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </button>
            </div>

            {/* Logout Section */}
            <div className="border-t border-slate-700 py-1">
              <button
                onClick={handleLogoutClick}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-400 transition-colors hover:bg-slate-800 hover:text-red-300 focus:bg-slate-800 focus:outline-none"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

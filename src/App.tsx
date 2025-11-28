import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { GlobalNetwork } from './components/GlobalNetwork';
import { KanbanBoard } from './components/KanbanBoard';
import { Settings } from './components/Settings';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <GlobalNetwork />;
      case 'projects':
        return <KanbanBoard />;
      case 'settings':
        return <Settings />;
      default:
        return <Analytics />;
    }
  };

  return <div className="dark">{renderPage()}</div>;
}

function App() {
  return (
    <NavigationProvider>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </NavigationProvider>
  );
}

export default App;

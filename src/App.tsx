import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { GlobalNetwork } from './components/GlobalNetwork';

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
      case 'settings':
        return <Dashboard />; // Placeholder
      default:
        return <Analytics />;
    }
  };

  return <div className="dark">{renderPage()}</div>;
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;

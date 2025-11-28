# 📊 React Analytics Dashboard

A modern, feature-rich analytics dashboard built with React, TypeScript, and Vite. This project provides a comprehensive admin interface with multiple visualization pages, real-time data monitoring, and project management capabilities.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan)

## ✨ Features

### 🎯 **Dashboard Overview**
- **Business Performance Metrics** - Revenue trends, orders, and user growth
- **Multi-metric Composed Charts** - Combined area, bar, and line visualizations
- **Sales Funnel Analysis** - Conversion tracking from visits to purchases
- **Customer Value Scatter Plot** - Engagement vs. lifetime value analysis
- **Device Usage Trends** - Stacked area charts for desktop, mobile, and tablet
- **Category Performance Treemap** - Visual representation of product categories
- **Live Activity Feed** - Real-time user actions and transactions

### 📈 **Advanced Analytics**
- **Revenue Trend Analysis** - 12-month revenue tracking with gradient charts
- **Traffic Source Breakdown** - Horizontal bar charts for organic, direct, social, referral, and email
- **Device Distribution** - Pie charts showing desktop, mobile, and tablet usage
- **Performance Metrics Radar** - Speed, SEO, accessibility, and best practices scores
- **Hourly Activity Patterns** - Time-based user engagement analysis
- **Top Performing Pages** - Detailed metrics with bounce rates and average time

### 🌍 **Global Network Visualization**
- **Interactive World Map** - SVG-based map with animated network nodes
- **13 Global Locations** - Major cities across continents
- **Real-time Connections** - Animated data flow between nodes
- **Network Statistics** - Active nodes, data transfer, and network load
- **Location Details** - Activity percentage and user metrics per location
- **Pulse Animations** - Visual indicators for active connections

### 🎯 **Kanban Project Board**
- **3-Column Layout** - To Do, In Progress, and Done
- **Task Cards** - Rich metadata including title, description, and tags
- **Priority System** - High, medium, and low priority badges with color coding
- **Due Date Tracking** - Countdown timers with overdue warnings
- **Assignee Management** - Avatar display with initials
- **Project Statistics** - Total tasks, in progress, completed, and completion rate
- **Tag System** - Categorize tasks by type (Design, Backend, Frontend, etc.)

### 🎨 **UI/UX Features**
- **Collapsible Sidebar** - Mini mode (icons only) and expanded mode (icons + text)
- **User Profile Dropdown** - Avatar, name, email, and menu options (Profile, Settings, Logout)
- **Responsive Header** - Hamburger menu and user controls
- **Dark Theme** - Professional dark mode design throughout
- **Smooth Animations** - Transitions, hover effects, and micro-interactions
- **Skeleton Loaders** - Loading states for better UX

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 7.2.4** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Data Visualization
- **Recharts 2.15.0** - Composable charting library
- Area Charts, Bar Charts, Line Charts
- Pie Charts, Radar Charts, Scatter Plots
- Treemap, Funnel Charts, Composed Charts

### UI Components
- **Lucide React** - Icon library
- **Custom UI Components** - Card, Table, Button, Input, Skeleton
- **shadcn/ui** - Component architecture pattern

### State Management
- **React Context API** - Navigation and sidebar state
- **React Hooks** - useState, useEffect, useContext

## 📁 Project Structure

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── Analytics.tsx           # Advanced analytics page
│   │   ├── Dashboard.tsx           # Main dashboard page
│   │   ├── GlobalNetwork.tsx       # World map visualization
│   │   ├── KanbanBoard.tsx         # Project management board
│   │   ├── Header.tsx              # Top navigation bar
│   │   ├── Sidebar.tsx             # Collapsible sidebar menu
│   │   ├── UserProfileDropdown.tsx # User menu dropdown
│   │   ├── StatCard.tsx            # Metric display cards
│   │   ├── ChartSection.tsx        # Reusable chart wrapper
│   │   ├── DataTable.tsx           # Data table component
│   │   └── ui/                     # UI primitives
│   │       ├── card.tsx
│   │       ├── table.tsx
│   │       └── skeleton.tsx
│   ├── contexts/
│   │   ├── NavigationContext.tsx   # Page navigation state
│   │   └── SidebarContext.tsx      # Sidebar collapse state
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   └── sampleData.ts           # Mock data for demo
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── .kiro/                          # Kiro AI specs
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd react-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

### 1. Dashboard (`/`)
Main overview with business metrics, charts, and activity feed.

### 2. Analytics (`/analytics`)
Advanced analytics with detailed metrics and performance indicators.

### 3. Global Network (`/reports`)
Interactive world map showing global user distribution and network activity.

### 4. Projects (`/projects`)
Kanban board for project and task management.

### 5. Settings (`/settings`)
Application settings and preferences (placeholder).

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
      // Add your colors
    }
  }
}
```

### Sample Data
Modify `src/lib/sampleData.ts` to change demo data:

```typescript
export const sampleStats: StatData[] = [
  // Your custom stats
];
```

### Add New Pages
1. Create component in `src/components/`
2. Add route in `src/App.tsx`
3. Add menu item in `src/lib/sampleData.ts`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📊 Key Components

### Dashboard Components
- **StatCard** - Displays key metrics with trends
- **ChartSection** - Wrapper for Recharts visualizations
- **DataTable** - Sortable, filterable data tables

### Layout Components
- **Sidebar** - Collapsible navigation menu
- **Header** - Top bar with user profile
- **Layout** - Page wrapper with sidebar integration

### UI Components
- **Card** - Container component
- **Button** - Interactive button with variants
- **Skeleton** - Loading state placeholders

## 🎯 Features in Detail

### Collapsible Sidebar
- **Expanded Mode**: 256px width with icons and labels
- **Collapsed Mode**: 80px width with icons only
- **Tooltips**: Hover to see labels in collapsed mode
- **Smooth Transitions**: 300ms animation

### User Profile Dropdown
- **Avatar Display**: Gradient background with initials
- **User Info**: Name and email
- **Menu Options**: Profile, Settings, Logout
- **Click Outside**: Auto-close on outside click
- **Keyboard Support**: ESC key to close

### Charts & Visualizations
- **Responsive**: Auto-adjust to container size
- **Interactive**: Hover tooltips and legends
- **Animated**: Smooth transitions and loading states
- **Customizable**: Easy to modify colors and data

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ using React, TypeScript, and Vite

---

**Note**: This is a demo project with sample data. For production use, connect to real APIs and implement proper authentication and authorization.

import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Card, CardContent } from '@/components/ui/card';
import { sampleMenuItems } from '@/lib/sampleData';
import { Activity, Globe, Zap, Network } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NetworkNode {
  id: string;
  city: string;
  country: string;
  x: number;
  y: number;
  connections: string[];
  activity: number;
}

export function GlobalNetwork() {
  const [activeConnections, setActiveConnections] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnections((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const nodes: NetworkNode[] = [
    { id: 'nyc', city: 'New York', country: 'USA', x: 240, y: 180, connections: ['lon', 'par', 'tok'], activity: 95 },
    { id: 'sfo', city: 'San Francisco', country: 'USA', x: 180, y: 190, connections: ['tok', 'syd', 'sin'], activity: 88 },
    { id: 'lon', city: 'London', country: 'UK', x: 490, y: 150, connections: ['nyc', 'par', 'dub'], activity: 92 },
    { id: 'par', city: 'Paris', country: 'France', x: 500, y: 165, connections: ['lon', 'ber', 'nyc'], activity: 85 },
    { id: 'ber', city: 'Berlin', country: 'Germany', x: 520, y: 155, connections: ['par', 'mos', 'lon'], activity: 78 },
    { id: 'mos', city: 'Moscow', country: 'Russia', x: 600, y: 140, connections: ['ber', 'bei', 'dub'], activity: 82 },
    { id: 'dub', city: 'Dubai', country: 'UAE', x: 620, y: 210, connections: ['lon', 'mos', 'sin', 'mum'], activity: 90 },
    { id: 'mum', city: 'Mumbai', country: 'India', x: 680, y: 220, connections: ['dub', 'sin', 'bei'], activity: 87 },
    { id: 'sin', city: 'Singapore', country: 'Singapore', x: 740, y: 260, connections: ['sfo', 'dub', 'mum', 'tok', 'syd'], activity: 94 },
    { id: 'bei', city: 'Beijing', country: 'China', x: 760, y: 180, connections: ['mos', 'mum', 'tok', 'sin'], activity: 91 },
    { id: 'tok', city: 'Tokyo', country: 'Japan', x: 820, y: 185, connections: ['nyc', 'sfo', 'bei', 'sin', 'syd'], activity: 96 },
    { id: 'syd', city: 'Sydney', country: 'Australia', x: 810, y: 370, connections: ['sfo', 'sin', 'tok'], activity: 83 },
    { id: 'sao', city: 'São Paulo', country: 'Brazil', x: 320, y: 360, connections: ['nyc', 'lon'], activity: 75 },
  ];

  const stats = [
    { label: 'Active Nodes', value: nodes.length, icon: Globe, color: 'text-blue-400' },
    { label: 'Data Transfer', value: '2.4 PB/s', icon: Activity, color: 'text-green-400' },
    { label: 'Network Load', value: '87%', icon: Zap, color: 'text-yellow-400' },
    { label: 'Connections', value: activeConnections, icon: Network, color: 'text-purple-400' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar menuItems={sampleMenuItems} />

      <div className="flex-1 pl-64">
        <Header title="Global Network" subtitle="Real-time worldwide connectivity visualization" />

        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-slate-700 bg-slate-900/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <stat.icon className={`h-10 w-10 ${stat.color} opacity-80`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Global Network Map */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <CardContent className="p-0">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: '600px' }}>
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <defs>
                    {/* Glow filter */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Gradient for connections */}
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Background grid */}
                  <g opacity="0.03">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 10}
                        x2="1000"
                        y2={i * 10}
                        stroke="#64748b"
                        strokeWidth="1"
                      />
                    ))}
                    {Array.from({ length: 100 }).map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 10}
                        y1="0"
                        x2={i * 10}
                        y2="500"
                        stroke="#64748b"
                        strokeWidth="1"
                      />
                    ))}
                  </g>

                  {/* World Map Continents */}
                  <g opacity="0.15">
                    {/* North America */}
                    <path
                      d="M 150,100 L 180,80 L 220,90 L 250,100 L 280,120 L 290,150 L 285,180 L 270,210 L 250,230 L 220,240 L 190,235 L 170,220 L 160,200 L 155,170 L 150,140 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* South America */}
                    <path
                      d="M 280,260 L 300,250 L 320,260 L 335,280 L 345,310 L 350,340 L 345,370 L 330,395 L 310,405 L 290,400 L 275,385 L 270,360 L 268,330 L 270,300 L 275,280 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* Europe */}
                    <path
                      d="M 470,120 L 490,110 L 515,115 L 535,125 L 545,140 L 548,160 L 540,175 L 525,185 L 505,188 L 485,182 L 472,170 L 468,150 L 470,130 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* Africa */}
                    <path
                      d="M 480,200 L 510,195 L 540,205 L 560,225 L 570,255 L 575,290 L 570,325 L 555,360 L 535,385 L 510,395 L 485,390 L 465,370 L 455,340 L 452,305 L 455,270 L 465,235 L 475,215 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* Asia */}
                    <path
                      d="M 550,90 L 600,80 L 650,85 L 700,95 L 750,110 L 800,130 L 840,155 L 860,185 L 865,215 L 855,245 L 830,265 L 790,275 L 740,270 L 690,255 L 640,235 L 590,215 L 560,190 L 545,160 L 545,125 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* Australia */}
                    <path
                      d="M 750,340 L 790,335 L 830,345 L 860,365 L 870,390 L 865,410 L 845,425 L 815,430 L 780,425 L 755,410 L 745,385 L 745,360 Z"
                      fill="#94a3b8"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                  </g>

                  {/* Connection lines */}
                  {nodes.map((node) =>
                    node.connections.map((targetId) => {
                      const target = nodes.find((n) => n.id === targetId);
                      if (!target) return null;
                      return (
                        <g key={`${node.id}-${targetId}`}>
                          <line
                            x1={node.x}
                            y1={node.y}
                            x2={target.x}
                            y2={target.y}
                            stroke="url(#connectionGradient)"
                            strokeWidth="1.5"
                            opacity="0.4"
                          >
                            <animate
                              attributeName="stroke-dasharray"
                              from="0 10"
                              to="10 0"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </line>
                          {/* Animated particle */}
                          <circle r="2" fill="#60a5fa" filter="url(#glow)">
                            <animateMotion
                              dur="3s"
                              repeatCount="indefinite"
                              path={`M ${node.x} ${node.y} L ${target.x} ${target.y}`}
                            />
                          </circle>
                        </g>
                      );
                    })
                  )}

                  {/* Network nodes */}
                  {nodes.map((node) => (
                    <g key={node.id} className="cursor-pointer group">
                      {/* Pulse rings */}
                      <circle cx={node.x} cy={node.y} r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0">
                        <animate attributeName="r" from="10" to="30" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>

                      {/* Outer glow */}
                      <circle cx={node.x} cy={node.y} r="15" fill="#3b82f6" opacity="0.2" filter="url(#glow)" />

                      {/* Main node */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="8"
                        fill="#60a5fa"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        filter="url(#glow)"
                        className="group-hover:r-10 transition-all"
                      />

                      {/* Activity indicator */}
                      <circle cx={node.x} cy={node.y} r="4" fill="#fff" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
                      </circle>

                      {/* Label */}
                      <text
                        x={node.x}
                        y={node.y - 20}
                        textAnchor="middle"
                        fill="#e2e8f0"
                        fontSize="11"
                        fontWeight="600"
                        opacity="0.9"
                      >
                        {node.city}
                      </text>

                      {/* Hover info */}
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <rect
                          x={node.x + 15}
                          y={node.y - 30}
                          width="120"
                          height="50"
                          fill="#0f172a"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          rx="6"
                          opacity="0.95"
                          filter="url(#glow)"
                        />
                        <text x={node.x + 25} y={node.y - 12} fill="#f1f5f9" fontSize="12" fontWeight="bold">
                          {node.city}
                        </text>
                        <text x={node.x + 25} y={node.y + 2} fill="#94a3b8" fontSize="10">
                          {node.country}
                        </text>
                        <text x={node.x + 25} y={node.y + 15} fill="#60a5fa" fontSize="10" fontWeight="600">
                          Activity: {node.activity}%
                        </text>
                      </g>
                    </g>
                  ))}
                </svg>

                {/* Overlay info */}
                <div className="absolute top-6 left-6 space-y-3">
                  <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg p-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Network Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-green-400 font-semibold">All Systems Operational</span>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">Legend</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
                      <span className="text-xs text-slate-300">Network Node</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400/20 via-blue-400 to-blue-400/20" />
                      <span className="text-xs text-slate-300">Data Flow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-xs text-slate-300">Active Transfer</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Node Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {nodes.map((node) => (
              <Card key={node.id} className="border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <p className="text-sm font-semibold text-slate-200">{node.city}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{node.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Activity</span>
                    <span className="text-xs font-semibold text-blue-400">{node.activity}%</span>
                  </div>
                  <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      style={{ width: `${node.activity}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

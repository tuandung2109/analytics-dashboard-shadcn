import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Card, CardContent } from '@/components/ui/card';
import { sampleMenuItems } from '@/lib/sampleData';
import { Shield, AlertTriangle, Activity, TrendingUp } from 'lucide-react';
import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import GlobeCore from './Globe3D';

interface AttackNode {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: 'source' | 'target';
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
}

interface Attack {
  id: string;
  source: AttackNode;
  target: AttackNode;
  type: string;
  progress: number;
}

interface LiveAttack {
  id: string;
  time: string;
  source: string;
  target: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export function GlobalNetwork() {
  const [totalAttacks, setTotalAttacks] = useState(1247);
  const [blockedAttacks, setBlockedAttacks] = useState(1189);
  const [liveAttacks, setLiveAttacks] = useState<LiveAttack[]>([]);

  // Simulate real-time attacks
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalAttacks(prev => prev + Math.floor(Math.random() * 3));
      setBlockedAttacks(prev => prev + Math.floor(Math.random() * 2));
      
      // Add new live attack
      const attackTypes = ['DDoS', 'SQL Injection', 'XSS', 'Brute Force', 'Malware', 'Phishing'];
      const severities: ('low' | 'medium' | 'high' | 'critical')[] = ['low', 'medium', 'high', 'critical'];
      const sources = ['Russia', 'China', 'North Korea', 'Iran', 'Unknown'];
      const targets = ['USA', 'UK', 'Germany', 'Japan', 'Australia'];
      
      const newAttack: LiveAttack = {
        id: Date.now().toString(),
        time: new Date().toLocaleTimeString(),
        source: sources[Math.floor(Math.random() * sources.length)],
        target: targets[Math.floor(Math.random() * targets.length)],
        type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
        severity: severities[Math.floor(Math.random() * severities.length)]
      };
      
      setLiveAttacks(prev => [newAttack, ...prev].slice(0, 8));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Threat nodes around the world
  const nodes: AttackNode[] = [
    // Attack sources (red/orange)
    { id: 'mos', city: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, type: 'source', threatLevel: 'critical' },
    { id: 'bei', city: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, type: 'source', threatLevel: 'critical' },
    { id: 'pyo', city: 'Pyongyang', country: 'N. Korea', lat: 39.0392, lng: 125.7625, type: 'source', threatLevel: 'high' },
    { id: 'teh', city: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.3890, type: 'source', threatLevel: 'high' },
    { id: 'buc', city: 'Bucharest', country: 'Romania', lat: 44.4268, lng: 26.1025, type: 'source', threatLevel: 'medium' },
    
    // Protected targets (green/blue)
    { id: 'nyc', city: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, type: 'target', threatLevel: 'low' },
    { id: 'sfo', city: 'San Francisco', country: 'USA', lat: 37.7749, lng: -122.4194, type: 'target', threatLevel: 'low' },
    { id: 'lon', city: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, type: 'target', threatLevel: 'low' },
    { id: 'par', city: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, type: 'target', threatLevel: 'medium' },
    { id: 'ber', city: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, type: 'target', threatLevel: 'low' },
    { id: 'tok', city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, type: 'target', threatLevel: 'low' },
    { id: 'syd', city: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, type: 'target', threatLevel: 'low' },
    { id: 'sin', city: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, type: 'target', threatLevel: 'low' },
  ];

  // Simulated attacks
  const attacks: Attack[] = [
    { id: '1', source: nodes[0], target: nodes[5], type: 'DDoS', progress: 0 },
    { id: '2', source: nodes[1], target: nodes[6], type: 'Malware', progress: 0 },
    { id: '3', source: nodes[2], target: nodes[10], type: 'Brute Force', progress: 0 },
    { id: '4', source: nodes[3], target: nodes[7], type: 'SQL Injection', progress: 0 },
    { id: '5', source: nodes[0], target: nodes[9], type: 'XSS', progress: 0 },
  ];

  const stats = [
    { 
      label: 'Total Attacks', 
      value: totalAttacks.toLocaleString(), 
      icon: AlertTriangle, 
      color: 'text-red-400',
      change: '+12%'
    },
    { 
      label: 'Blocked Threats', 
      value: blockedAttacks.toLocaleString(), 
      icon: Shield, 
      color: 'text-green-400',
      change: '+8%'
    },
    { 
      label: 'Active Threats', 
      value: (totalAttacks - blockedAttacks).toString(), 
      icon: Activity, 
      color: 'text-orange-400',
      change: '+24%'
    },
    { 
      label: 'Success Rate', 
      value: `${Math.round((blockedAttacks / totalAttacks) * 100)}%`, 
      icon: TrendingUp, 
      color: 'text-blue-400',
      change: '+3%'
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar menuItems={sampleMenuItems} />

      <div className="flex-1 pl-64">
        <Header title="Cyber Threat Map" subtitle="Real-time global cyber attack monitoring" />

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
                      <p className="text-xs text-slate-500 mt-1">{stat.change} from last hour</p>
                    </div>
                    <stat.icon className={`h-10 w-10 ${stat.color} opacity-80`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 3D Globe */}
            <div className="lg:col-span-2">
              <Card className="border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <CardContent className="p-0">
                  <div className="relative w-full overflow-hidden rounded-lg" style={{ height: '600px' }}>
                    <Canvas className="w-full h-full">
                      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                      <OrbitControls 
                        enableZoom={true}
                        enablePan={false}
                        minDistance={5}
                        maxDistance={15}
                        autoRotate={false}
                      />
                      
                      {/* Lighting */}
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={1} />
                      <pointLight position={[-10, -10, -10]} intensity={0.5} />
                      
                      {/* 3D Globe */}
                      <Suspense fallback={null}>
                        <GlobeCore nodes={nodes} attacks={attacks} />
                      </Suspense>
                    </Canvas>

                    {/* Overlay info */}
                    <div className="absolute top-6 left-6 space-y-3">
                      <div className="bg-slate-900/90 backdrop-blur-md border border-red-900/50 rounded-lg p-4">
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Threat Level</p>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-sm text-red-400 font-semibold">High Alert</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg p-4">
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">Legend</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <span className="text-xs text-slate-300">Attack Source</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <span className="text-xs text-slate-300">Protected Target</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500/20 via-red-500 to-red-500/20" />
                          <span className="text-xs text-slate-300">Active Attack</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Attack Feed */}
            <div className="lg:col-span-1">
              <Card className="border-slate-700 bg-slate-900/50 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-200">Live Attacks</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs text-slate-400">Real-time</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 max-h-[520px] overflow-y-auto">
                    {liveAttacks.map((attack) => (
                      <div 
                        key={attack.id} 
                        className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 hover:bg-slate-800 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className={`text-xs px-2 py-1 rounded border ${getSeverityColor(attack.severity)}`}>
                            {attack.severity.toUpperCase()}
                          </span>
                          <span className="text-xs text-slate-500">{attack.time}</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-200 mb-1">{attack.type}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{attack.source}</span>
                          <span>→</span>
                          <span>{attack.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Attack Types Distribution */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { type: 'DDoS', count: 342, color: 'bg-red-500' },
              { type: 'Malware', count: 289, color: 'bg-orange-500' },
              { type: 'Phishing', count: 234, color: 'bg-yellow-500' },
              { type: 'SQL Injection', count: 187, color: 'bg-purple-500' },
              { type: 'XSS', count: 156, color: 'bg-pink-500' },
              { type: 'Brute Force', count: 139, color: 'bg-blue-500' },
            ].map((item) => (
              <Card key={item.type} className="border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                <CardContent className="pt-4">
                  <div className={`w-3 h-3 rounded-full ${item.color} mb-2`} />
                  <p className="text-sm font-semibold text-slate-200">{item.type}</p>
                  <p className="text-2xl font-bold text-slate-300 mt-1">{item.count}</p>
                  <p className="text-xs text-slate-500 mt-1">attacks today</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

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

interface Globe3DProps {
  nodes: AttackNode[];
  attacks: Attack[];
}

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

// Get color based on threat level
function getThreatColor(level: string) {
  switch (level) {
    case 'critical': return '#ef4444';
    case 'high': return '#f97316';
    case 'medium': return '#eab308';
    case 'low': return '#22c55e';
    default: return '#3b82f6';
  }
}

function AttackArc({ attack }: { attack: Attack }) {
  const [progress, setProgress] = useState(0);
  
  useFrame(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  });

  const start = latLngToVector3(attack.source.lat, attack.source.lng, 2.5);
  const end = latLngToVector3(attack.target.lat, attack.target.lng, 2.5);
  
  // Calculate midpoint for arc
  const mid = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(3.5);

  return (
    <group>
      <QuadraticBezierLine
        start={start}
        end={end}
        mid={mid}
        color="#ef4444"
        lineWidth={2}
        transparent
        opacity={0.6}
      />
      {/* Moving particle */}
      <mesh position={new THREE.Vector3().lerpVectors(start, mid, progress * 2 > 1 ? 1 : progress * 2).lerp(end, progress * 2 > 1 ? (progress * 2 - 1) : 0)}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#ff0000" />
      </mesh>
    </group>
  );
}

function GlobeCore({ nodes, attacks }: Globe3DProps) {
  const globeRef = useRef<THREE.Mesh>(null);
  
  // Auto-rotate globe slowly
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005;
    }
  });

  // Create node positions
  const nodePositions = useMemo(() => {
    return nodes.map(node => ({
      ...node,
      position: latLngToVector3(node.lat, node.lng, 2.5)
    }));
  }, [nodes]);

  return (
    <group ref={globeRef}>
      {/* Main Globe with gradient */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0f172a"
          emissive="#1e40af"
          emissiveIntensity={0.2}
          roughness={0.7}
          metalness={0.3}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Globe wireframe overlay - latitude/longitude lines */}
      <Sphere args={[2.02, 32, 16]}>
        <meshBasicMaterial
          color="#1e40af"
          wireframe
          transparent
          opacity={0.2}
        />
      </Sphere>

      {/* Attack arcs */}
      {attacks.map((attack) => (
        <AttackArc key={attack.id} attack={attack} />
      ))}

      {/* Threat nodes */}
      {nodePositions.map((node) => {
        const color = getThreatColor(node.threatLevel);
        return (
          <group key={node.id} position={node.position}>
            {/* Pulse ring */}
            <Sphere args={[0.15, 16, 16]}>
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.2}
              />
            </Sphere>
            
            {/* Main node */}
            <Sphere args={[0.08, 16, 16]}>
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1.5}
              />
            </Sphere>

            {/* Inner core */}
            <Sphere args={[0.04, 16, 16]}>
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.8}
              />
            </Sphere>

            {/* Vertical beam for high threats */}
            {(node.threatLevel === 'critical' || node.threatLevel === 'high') && (
              <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                <meshBasicMaterial
                  color={color}
                  transparent
                  opacity={0.4}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

export default GlobeCore;

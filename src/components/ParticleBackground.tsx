import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  count?: number;
}

function ParticleBackground({ count = 1000 }: ParticleBackgroundProps) {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, [count]);

  // Generate random colors for particles
  const particlesColor = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#3b82f6'), // blue
      new THREE.Color('#60a5fa'), // light blue
      new THREE.Color('#8b5cf6'), // purple
      new THREE.Color('#06b6d4'), // cyan
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return colors;
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate entire particle system slowly
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
    
    // Wave effect
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Original positions
      const x = particlesPosition[i3];
      const y = particlesPosition[i3 + 1];
      const z = particlesPosition[i3 + 2];
      
      // Add wave motion
      positions[i3] = x + Math.sin(time + x * 0.3) * 0.3;
      positions[i3 + 1] = y + Math.cos(time + y * 0.3) * 0.3;
      positions[i3 + 2] = z + Math.sin(time + z * 0.3) * 0.3;
      
      // Mouse interaction
      const mouseX = mouse.x * 5;
      const mouseY = mouse.y * 5;
      const distance = Math.sqrt(
        Math.pow(positions[i3] - mouseX, 2) + 
        Math.pow(positions[i3 + 1] - mouseY, 2)
      );
      
      if (distance < 3) {
        positions[i3] += (positions[i3] - mouseX) * 0.02;
        positions[i3 + 1] += (positions[i3 + 1] - mouseY) * 0.02;
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesColor}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Connection lines between nearby particles
function ParticleConnections({ count = 1000 }: ParticleBackgroundProps) {
  const lines = useRef<THREE.LineSegments>(null);
  
  const { positions, colors } = useMemo(() => {
    const maxConnections = 50;
    const positions = new Float32Array(maxConnections * 6);
    const colors = new Float32Array(maxConnections * 6);
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!lines.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Animate opacity
    const material = lines.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.2 + Math.sin(time) * 0.1;
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function ParticleSystem() {
  return (
    <group>
      <ParticleBackground count={1000} />
      <ParticleConnections count={1000} />
    </group>
  );
}

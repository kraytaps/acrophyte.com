import React, { useMemo, useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useTexture } from "@react-three/drei";

export default function ParticleBackground() {
	const particlesTexture = useTexture("/textures/particles/1.png");
	const pointsRef = useRef();
	const { viewport } = useThree();
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const particles = useMemo(() => {
		const gridSize = 100; // Number of particles along each axis
		const spacing = 0.25; // Reduced spacing for a denser grid
		const particlesCount = gridSize * gridSize;
		const positions = new Float32Array(particlesCount * 3);

		for (let i = 0; i < gridSize; i++) {
			for (let j = 0; j < gridSize; j++) {
				const index = i * gridSize + j;
				positions[index * 3 + 0] = (i - gridSize / 2) * spacing;
				positions[index * 3 + 1] = (j - gridSize / 2) * spacing;
				positions[index * 3 + 2] = 0; // All particles on the same z-plane
			}
		}

		return positions;
	}, []);

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({
				x: (event.clientX / window.innerWidth) * 2 - 1,
				y: -(event.clientY / window.innerHeight) * 2 + 1,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useFrame(() => {
		if (pointsRef.current) {
			const positions = pointsRef.current.geometry.attributes.position.array;
			const gridSize = Math.sqrt(positions.length / 3);
			const spacing = 0.05;

			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					const index = i * gridSize + j;
					const x = (i - gridSize / 2) * spacing;
					const y = (j - gridSize / 2) * spacing;

					const distanceToMouse = Math.sqrt(
						Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
					);

					const bulgeStrength = 0.2;
					const bulgeRadius = 2.5;

					let z = 0;
					if (distanceToMouse < bulgeRadius) {
						// Calculate the bulge effect, strongest at the center
						const t = 1 - distanceToMouse / bulgeRadius;
						const smoothT = t * t * (3 - 2 * t); // Smoothstep function
						z = Math.cos(smoothT * Math.PI) * bulgeStrength;
					}

					positions[index * 3 + 2] = z;
				}
			}

			pointsRef.current.geometry.attributes.position.needsUpdate = true;
		}
	});

	return (
		<>
			<OrbitControls makeDefault />
			<points ref={pointsRef}>
				<bufferGeometry>
					<bufferAttribute
						attach="attributes-position"
						count={particles.length / 3}
						array={particles}
						itemSize={3}
					/>
				</bufferGeometry>
				<pointsMaterial
					color={0x404040}
					size={0.2}
					sizeAttenuation
					alphaMap={particlesTexture}
					transparent
				/>
			</points>
		</>
	);
}

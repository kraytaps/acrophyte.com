import React, { useMemo, useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

export default function ParticleBackground() {
	const particlesTexture = useTexture("/textures/particles/1.png");
	const pointsRef = useRef();
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

	const prevPositions = useRef(new Float32Array(particles.length));

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

	useFrame((state, delta) => {
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

					const bulgeStrength = 0.35;
					const bulgeRadius = 0.5;

					let targetZ = 0;
					if (distanceToMouse < bulgeRadius) {
						const t = 1 - distanceToMouse / bulgeRadius;
						const smoothT = t * t * (3 - 2 * t); // Smoothstep function
						targetZ = Math.cos(smoothT * Math.PI) * bulgeStrength;
					}

					// Lerp between the current position and the target position
					const lerpFactor = 1 - Math.pow(0.1, delta); // Adjust 0.1 to control the "friction"
					const newZ =
						prevPositions.current[index * 3 + 2] +
						(targetZ - prevPositions.current[index * 3 + 2]) * lerpFactor;

					positions[index * 3 + 2] = newZ;
					prevPositions.current[index * 3 + 2] = newZ;
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

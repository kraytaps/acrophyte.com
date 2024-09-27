import React from "react";
import { Canvas } from "@react-three/fiber";
import ParticleBackground from "./ParticleBackground";

export default function Scene({ className = "" }) {
	return (
		<>
			<Canvas
				className={className}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<ParticleBackground />
			</Canvas>
		</>
	);
}

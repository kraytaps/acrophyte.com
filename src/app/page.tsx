"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import SingEdSvg from "/public/svg/SingEdSvg";
import SingHaiYiSvg from "/public/svg/SingHaiYiSvg";
import AcrophyteAssetMgmtSvg from "/public/svg/AcrophyteAssetMgmtSvg";
import GRCSvg from "/public/svg/GRCSvg";
import MomentusSvg from "/public/svg/MomentusSvg";
import AcrophyteLogo from "/public/img/acrophyte-logo.png";
import Scene from "@/components/Scene";

const brandLogos = [
	SingEdSvg,
	MomentusSvg,
	SingHaiYiSvg,
	AcrophyteAssetMgmtSvg,
	GRCSvg,
];

export default function Home() {
	const [gridItems, setGridItems] = useState(30); // Default number of items

	useEffect(() => {
		const updateGrid = () => {
			const width = window.innerWidth;
			if (width < 480) {
				setGridItems(20); // Fewer items on smaller screens
			} else if (width < 768) {
				setGridItems(24);
			} else {
				setGridItems(30); // More items on larger screens
			}
		};

		window.addEventListener("resize", updateGrid);
		updateGrid(); // Initialize on component mount

		return () => window.removeEventListener("resize", updateGrid);
	}, []);

	return (
		<main className="flex relative flex-col items-center w-full">
			<section className="flex relative flex-col justify-center items-center w-full min-h-screen text-center text-grey-2">
				<div className="flex relative z-10 flex-col gap-10 justify-end items-center p-6 w-full min-h-screen md:p-10">
					<div className="relative md:absolute md:left-[50%] md:top-[45%]">
						<div className="md:translate-x-[-50%] md:translate-y-[-50%] flex flex-col items-center justify-center gap-4">
							<Image
								src={AcrophyteLogo}
								alt="Acrophyte Logo"
								width={100}
								height={100}
							/>
							<h1 className="~text-2xl/4xl sm:leading-snug uppercase font-ownersXWide text-gold-0">
								Site <br /> Construction in <br /> Progress
							</h1>
						</div>
					</div>
					<div className="flex flex-col gap-10 items-center text-grey-1">
						<div className="flex flex-col gap-6 items-center">
							<p className="~text-base/xl">
								if you&apos;d like to be notified of our launch, enter your
								email below
							</p>
							<Input placeholder="Enter your email here" />
						</div>
						<div className="flex flex-wrap gap-8 justify-center items-center">
							{brandLogos.map((Svg, index) => (
								<Svg
									key={index}
									className="w-10 h-10 md:w-20 md:h-20"
								/>
							))}
						</div>
					</div>
				</div>

				<div className="absolute w-full h-full">
					<div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-background to-80%"></div>
					<Scene className="fixed top-0 left-0 -z-[1] w-full h-full" />
				</div>
			</section>
		</main>
	);
}

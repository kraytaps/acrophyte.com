"use client";

import { useEffect, useState } from "react";
import RightArrowSvg from "../../public/svg/RightArrowSvg";

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
		<main className="flex flex-col items-center w-full">
			<section className="flex relative flex-col justify-center items-center w-full min-h-screen text-center text-grey-2">
				<div className="flex relative z-10 flex-col justify-end items-center p-5 w-full min-h-screen md:p-10">
					<div className="absolute left-[50%] top-[50%]">
						<div className="translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-4">
							<h1 className="~text-3xl/5xl">acrophyte.com</h1>
							<p className="uppercase font-medium ~text-sm/lg text-grey-1">
								coming soon
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-6 items-center">
						<p className="~text-base/xl text-grey-1">
							if you&apos;d like to be notified of our launch, enter your email
							below
						</p>
						<div className="p-2 bg-opacity-50 rounded-lg bg-white-0">
							<div className="flex flex-row gap-10 items-center p-4 bg-opacity-50 rounded-lg bg-white-0">
								<p className="~text-base/lg text-grey-0">
									Enter your email here
								</p>
								<RightArrowSvg svgColor="text-grey-0" />
							</div>
						</div>
					</div>
				</div>
				<div className="absolute w-full h-full">
					<div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-background to-80%"></div>
					<div className="grid absolute z-[-1] grid-cols-2 grid-rows-4 w-full h-full sm:grid-cols-3 sm:grid-rows-5 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-5">
						{Array.from({ length: gridItems }, (_, i) => (
							<div
								key={i}
								className="h-full border border-grey-0"
							></div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
	// return (
	// 	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	// 		<main className="flex flex-col row-start-2 gap-8 items-center sm:items-start">
	// 			<Image
	// 				className="dark:invert"
	// 				src="https://nextjs.org/icons/next.svg"
	// 				alt="Next.js logo"
	// 				width={180}
	// 				height={38}
	// 				priority
	// 			/>
	// 			<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
	// 				<li className="mb-2">
	// 					Get started by editing{" "}
	// 					<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
	// 						src/app/page.tsx
	// 					</code>
	// 					.
	// 				</li>
	// 				<li>Save and see your changes instantly.</li>
	// 			</ol>

	// 			<div className="flex flex-col gap-4 items-center sm:flex-row">
	// 				<a
	// 					className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
	// 					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	// 					target="_blank"
	// 					rel="noopener noreferrer"
	// 				>
	// 					<Image
	// 						className="dark:invert"
	// 						src="https://nextjs.org/icons/vercel.svg"
	// 						alt="Vercel logomark"
	// 						width={20}
	// 						height={20}
	// 					/>
	// 					Deploy now
	// 				</a>
	// 				<a
	// 					className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
	// 					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	// 					target="_blank"
	// 					rel="noopener noreferrer"
	// 				>
	// 					Read our docs
	// 				</a>
	// 			</div>
	// 		</main>
	// 		<footer className="flex flex-wrap row-start-3 gap-6 justify-center items-center">
	// 			<a
	// 				className="flex gap-2 items-center hover:underline hover:underline-offset-4"
	// 				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<Image
	// 					aria-hidden
	// 					src="https://nextjs.org/icons/file.svg"
	// 					alt="File icon"
	// 					width={16}
	// 					height={16}
	// 				/>
	// 				Learn
	// 			</a>
	// 			<a
	// 				className="flex gap-2 items-center hover:underline hover:underline-offset-4"
	// 				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<Image
	// 					aria-hidden
	// 					src="https://nextjs.org/icons/window.svg"
	// 					alt="Window icon"
	// 					width={16}
	// 					height={16}
	// 				/>
	// 				Examples
	// 			</a>
	// 			<a
	// 				className="flex gap-2 items-center hover:underline hover:underline-offset-4"
	// 				href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<Image
	// 					aria-hidden
	// 					src="https://nextjs.org/icons/globe.svg"
	// 					alt="Globe icon"
	// 					width={16}
	// 					height={16}
	// 				/>
	// 				Go to nextjs.org →
	// 			</a>
	// 		</footer>
	// 	</div>
	// );
}

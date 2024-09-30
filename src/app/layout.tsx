import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
	src: [
		{
			path: "./fonts/avenir/AvenirLTStd-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/avenir/AvenirLTStd-Roman.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-avenir",
	fallback: ["system-ui", "arial"],
});

const ownersXWide = localFont({
	src: [
		{
			path: "./fonts/owners/OwnersXWide-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-ownersXWide",
	fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
	title: "Acrophyte",
	description: "Site Construction in Progress",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${avenir.variable} ${ownersXWide.variable}`}
		>
			<body className={`antialiased font-avenir`}>{children}</body>
		</html>
	);
}

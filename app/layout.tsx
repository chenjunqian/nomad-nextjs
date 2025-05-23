import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/header";
import SiteFooter from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";

export const metadata: Metadata = {
	title: "EXTRA NARRATIVE",
	description: "我们是额外叙事Extra Narrative，一家小型多元创意型设计工作室，2017年成立于上海，为海内外领先客户提供设计服务。我们专注于平面设计、视觉传达与插画，为企业实现永续的经营而努力。",
};

const nowayFont = localFont({
	src: [
		{
			path: "../public/fonts/noway-regular-webfont.woff2",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-noway",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nowayFont.className} font-noway`}>
				<div className="w-full flex justify-center">
					<div className="w-full max-w-screen-xl">
						<SiteHeader />
						<div className="">
							{children}
						</div>
						<SiteFooter />
					</div>
				</div>
				<Analytics />
			</body>
		</html>
	);
}

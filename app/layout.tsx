import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/header";
import SiteFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Extra Narraticve",
	description: "我们是额外叙事Extra Narrative，一家小型多元创意型设计工作室，2017年成立于上海，为海内外领先客户提供设计服务。我们专注于平面设计、视觉传达与插画，为企业实现永续的经营而努力。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="w-full flex justify-center">
					<div className="w-full max-w-screen-xl">
						<SiteHeader />
						{children}
						<SiteFooter />
					</div>
				</div>
			</body>
		</html>
	);
}

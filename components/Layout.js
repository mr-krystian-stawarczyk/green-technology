import React from "react";
import Head from "next/head";
import NavbarComp from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Poppins } from "@next/font/google";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import CookieConsent from "./CookieConsent";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const Layout = ({ children, pageProps }) => {
	const { t } = useTranslation();
	return (
		<div className="layout">
			<div className={poppins.className}>
				<Head>
					<title>AMGreenenergy</title>
				</Head>
				<header>
					<Navigation />
					<NavbarComp {...pageProps} />
					<CookieConsent />
				</header>

				<main className="main-container">{children}</main>

				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
};
export default Layout;

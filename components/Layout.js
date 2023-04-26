import React from "react";
import Head from "next/head";
import NavbarComp from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";

const Layout = ({ children, pageProps }) => {
	const { t } = useTranslation();
	return (
		<div className="layout">
			<Head>
				<title>AMGreenenergy</title>
			</Head>
			<header>
				<Navigation />
				<NavbarComp {...pageProps} />
			</header>

			<main className="main-container">{children}</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};
export default Layout;

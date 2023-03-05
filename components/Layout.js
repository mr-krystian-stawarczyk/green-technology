import React from "react";
import Head from "next/head";
import NavbarComp from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Layout = ({ children, pageProps }) => {
	return (
		<div className="layout">
			<Head>
				<title>Kuchnie</title>
			</Head>
			<header>
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

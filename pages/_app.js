import React, { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../components";
import { PageTransition } from "next-page-transitions";

import { CSSTransition } from "react-transition-group";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return (
		<Layout>
			<PageTransition
				timeout={300}
				classNames="page-transition"
				loadingComponent={<div>Loading...</div>}
				loadingDelay={500}
				loadingClassNames="loading"
				loadingTimeout={{
					enter: 400,
					exit: 0,
				}}
				skipInitialTransition={false}
			>
				<Component {...pageProps} />
			</PageTransition>
		</Layout>
	);
}

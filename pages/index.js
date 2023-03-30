import React from "react";

import {
	Header,
	Header2,
	HeaderSlides,
	Header4,
	Header5,
	ProductBrands,
	Header3,
} from "../components";

export default function Home() {
	return (
		<>
			<HeaderSlides />
			<Header />

			<Header2 />
			<Header4 />
			<Header3 />

			<Header5 />
			<ProductBrands />
		</>
	);
}

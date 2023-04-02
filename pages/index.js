import React from "react";

import {
	Header,
	Header2,
	HeaderSlides,
	Header4,
	Header5,
	ProductBrands,
	Header3,
	Reviews,
	Header6,
	HeaderCards,
} from "../components";

export default function Home() {
	return (
		<div className="wrapper">
			<HeaderSlides />
			<Reviews />
			<Header2 />
			<Header4 />
			<Header3 />
			<Header6 />
			<HeaderCards />

			<ProductBrands />
		</div>
	);
}

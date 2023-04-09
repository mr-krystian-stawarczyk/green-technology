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
	HeaderCounted,
	SanityWork,
} from "../components";

export default function Home() {
	return (
		<div className="wrapper">
			<HeaderSlides />

			<HeaderCounted />
			<Reviews />
			<Header2 />
			<Header4 />
			<Header3 />
			<SanityWork />
			<ProductBrands />
		</div>
	);
}

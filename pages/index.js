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
	HeaderN2,
} from "../components";
import HeaderN1 from "../components/HeaderN1";
import CountedBar from "../components/CountedBar";

export default function Home() {
	return (
		<div className="wrapper">
			<HeaderSlides />
			<HeaderN1 />
			<HeaderN2 />
			<CountedBar />

			<Reviews />

			<SanityWork />
		</div>
	);
}

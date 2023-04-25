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
	HeaderN3,
} from "../components";
import HeaderN1 from "../components/HeaderN1";

export default function Home() {
	return (
		<>
			<HeaderSlides />
			<HeaderN1 />
			<HeaderN2 />

			<HeaderN3 />
			<Reviews />

			<SanityWork />
		</>
	);
}

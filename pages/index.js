import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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
	Navigation,
	CookieConsent,
	SliderGal,
} from "../components";
import HeaderN1 from "../components/HeaderN1";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					AM Greenergy | Solar Panelen en Airconditioning | Nederland
				</title>
				<meta
					name="description"
					content="AM Green Energy levert hoogwaardige zonnepanelen en airconditioning oplossingen voor bedrijven en particulieren in Nederland. Contacteer ons voor een gratis offerte."
				/>{" "}
			</Head>

			<HeaderSlides />
			<HeaderN1 />
			<HeaderN2 />
			<HeaderN3 />
			<Reviews />
			<SliderGal />
		</>
	);
}

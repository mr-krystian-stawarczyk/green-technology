import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { useEffect, useRef, useState } from "react";

import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
import {
	HeaderN3,
	Offer,
	Product1,
	Product2,
	Product3,
	Product4,
	ProductBrands,
	ProductsPromo,
	Reviews,
} from "../components";
import Head from "next/head";
function Products() {
	return (
		<>
			<Head>
				<title>Offerte | AM Green Energy | Helmond</title>
				<meta
					name="description"
					content="Vraag nu een offerte aan bij AM Greenergy voor zonnepanelen, airconditioning of pompen in Helmond. Ons team staat klaar om u te helpen met uw energie- en watervoorziening!"
				/>
			</Head>
			<Offer />
			<ProductsPromo />
			<Reviews />
		</>
	);
}

export default Products;

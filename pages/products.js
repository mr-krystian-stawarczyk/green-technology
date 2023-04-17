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
function Products() {
	return (
		<>
			<Offer />
			<ProductsPromo />
			<Reviews />
		</>
	);
}

export default Products;

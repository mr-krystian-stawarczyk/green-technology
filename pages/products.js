import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { useEffect, useRef, useState } from "react";

import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
import {
	Offer,
	Product1,
	Product2,
	Product3,
	Product4,
	ProductBrands,
	Reviews,
} from "../components";
function Products() {
	return (
		<>
			<Offer />

			<Reviews />
		</>
	);
}

export default Products;

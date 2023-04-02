import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { useEffect, useRef, useState } from "react";

import { useSpring, animated } from "react-spring";

import { useRouter } from "next/router";
import {
	Product1,
	Product2,
	Product3,
	Product4,
	ProductBrands,
} from "../components";
function Products() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<>
			<Container fluid className="my-2 pt-5 " ref={sectionRef}>
				<ContactForm />
				<Product1 />
				<Product2 />
				<Product3 />
				<Product4 />
				<ProductBrands />
			</Container>
		</>
	);
}

export default Products;

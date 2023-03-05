import React, { useState } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ProductDetails = ({ product }) => {
	const { image, name, details, price, material } = product;

	return <Container className="mt-5 " fluid></Container>;
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
		slug {
        current
}
    }`;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

	const product = await client.fetch(query);
	const productsQuery = `*[_type == "product"]`;

	const products = await client.fetch(productsQuery);

	console.log(product);

	return {
		props: { products, product },
	};
};

export default ProductDetails;

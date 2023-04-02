import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Header, ProductBrands } from "../components";

function About() {
	const [fade, setFade] = React.useState(false);

	React.useEffect(() => {
		setFade(true);
	}, []);

	return (
		<>
			<Container fluid className="testimonial-bg">
				<Row>
					<Row className="text-center align-items-center justify-content-center text-dark blur pt-5 mb-2 vh-full">
						<Col
							lg={10}
							xs={8}
							className="    rounded text-center text-slide shadow-lg mt-5"
						>
							<h3 className="">
								Welcome to our companys subpage! We specialize in providing
								heating pumps and solar panels for residential and commercial
								properties.
							</h3>
						</Col>
						<Col
							lg={10}
							xs={8}
							className="  rounded text-center text-slide shadow-lg "
						>
							<h3>
								Our heating pumps use advanced technology to provide efficient
								and cost-effective heating solutions, while our solar panels
								harness the power of the sun to provide renewable energy for
								your property.
							</h3>
						</Col>
						<Col
							lg={10}
							xs={8}
							className=" rounded text-center  text-slide shadow-lg "
						>
							<h3>
								With over 20 years of experience in the industry, were committed
								to providing the highest quality products and services to our
								customers.
							</h3>
						</Col>
					</Row>
					<Row className="text-center align-items-center"></Row>
				</Row>
			</Container>
			<Header />
			<ProductBrands />
		</>
	);
}

export default About;

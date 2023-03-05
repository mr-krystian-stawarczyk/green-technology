import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid className="  p-5 header-bg rounded shadow-lg ">
			<Row className="justify-content-center text-center">
				<Col>
					<Button variant="success" className="m-2 shadow-lg hover">
						<Link href="/products/#product1" className="text-light ">
							Product 1
						</Link>
					</Button>
					<Button variant="success" className="m-2 shadow-lg hover">
						<Link href="/products/#product2" className="text-light">
							Product 2
						</Link>
					</Button>
					<Button variant="success" className="m-2 shadow-lg hover">
						<Link href="/products/#product3" className="text-light">
							Product 3
						</Link>
					</Button>
					<Button variant="success" className="m-2 shadow-lg hover">
						<Link href="/products/#product4" className="text-light">
							Product 4
						</Link>
					</Button>
					<Button variant="success" className="m-2 shadow-lg hover">
						<Link href="/products/#product5" className="text-light">
							Product 5
						</Link>
					</Button>
				</Col>
			</Row>
			<Row className="text-center m-5 justify-content-center ">
				<Col>
					<span className="icons">
						<AiFillInstagram className="hover" />

						<FaTiktok className="hover" />

						<AiOutlineFacebook className="hover" />
					</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Link href="/terms">Terms & Conditions</Link>
				<span>2023 AMgreenenergy® All Rights Reserved</span>
			</Row>
		</Container>
	);
}

export default Footer;

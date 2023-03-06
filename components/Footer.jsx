import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
function Footer() {
	return (
		<Container fluid className="  p-5 header-bg rounded shadow-lg ">
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

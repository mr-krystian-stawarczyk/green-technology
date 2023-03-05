import React from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";

import { Container, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

const NavbarComp = () => {
	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
			}}
			className="bg-white "
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand href="/">
					<Image
						alt=""
						src="/assets/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top mx-2"
					/>
					AMgreenergy
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav " />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="bg-white rounded justify-content-end text-center"
					style={{
						height: "70px",
					}}
				>
					<Nav>
						<Nav.Link as={Link} href="/" className="mx-2">
							<Button variant="success">Home</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/products" className="mx-2">
							<Button variant="success">Products</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/about" className="mx-2">
							<Button variant="success">About</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/work" className="mx-2">
							<Button variant="success"> Work</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="mx-2">
							<Button variant="success">Contact</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

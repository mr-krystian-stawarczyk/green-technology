import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShopping } from "react-icons/ai";
import { Container, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

const NavbarComp = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
				backgroundColor: scrolled ? "white" : "transparent",
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand href="/">
					<Image
						alt=""
						src="/assets/logo.svg"
						width="50"
						height="50"
						className="d-inline-block align-top mx-2"
					/>
					<span style={{ fontSize: "2rem" }}> AMgreenergy</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav " />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="bg-transparent rounded justify-content-end text-center"
					style={{
						height: "70px",
					}}
				>
					<Nav style={{ maxHeight: "50px" }}>
						<Nav.Link as={Link} href="/" className="mx-2">
							<Button variant="outline-success btn-lg">Home</Button>
						</Nav.Link>

						<NavDropdown
							title="Products"
							id="basic-nav-dropdown"
							as={Button}
							variant="outline-success"
							className=" mt-2 custom-dropdown pb-4"
						>
							<NavDropdown.Item href="#action/3.1">
								<Nav.Link as={Link} href="/products" className="mx-2">
									Solar Panels
								</Nav.Link>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								<Nav.Link as={Link} href="/products" className="mx-2">
									Bateries
								</Nav.Link>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								<Nav.Link as={Link} href="/products" className="mx-2">
									Heating Pumps
								</Nav.Link>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={Link} href="/about" className="mx-2">
							<Button variant="outline-success btn-lg">About</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/work" className="mx-2">
							<Button variant="outline-success btn-lg"> Work</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="mx-2">
							<Button variant="outline-success btn-lg">Contact</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

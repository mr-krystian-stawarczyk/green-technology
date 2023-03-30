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
				backgroundColor: scrolled ? "#fffffff3" : "transparent",
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/" className="blur rounded p-1 shadow-lg">
					<Image
						alt=""
						src="/assets/logo2.png"
						width="50"
						height="50"
						className="d-inline-block align-top mx-2"
					/>
					<span style={{ fontSize: "2rem" }}> AMgreenergy</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav " />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center "
					style={{}}
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded">
						<Nav.Link as={Link} href="/" className="mx-2 ">
							<Button variant=" btn-lg bg-light shadow-lg">Home</Button>
						</Nav.Link>

						<NavDropdown
							title="Products"
							id="basic-nav-dropdown"
							className="bg-light rounded shadow-lg p-1 mx-2 text-dark"
							style={{ borderColor: "#cccccc", borderWidth: 1 }} // add custom styles
						>
							<NavDropdown.Item as={Link} href="products">
								Products
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/solar">
								<Button variant="outline-secondary" className="w-100">
									Solar Panels
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/pumps">
								<Button variant="outline-secondary" className="w-100">
									Heat Pumps
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="klimatization">
								<Button variant="outline-secondary" className="w-100">
									Klimatization
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={Link} href="/about" className="mx-2">
							<Button variant=" btn-lg bg-light shadow-lg">About</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/work" className="mx-2">
							<Button variant=" btn-lg bg-light shadow-lg"> Work</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="mx-2">
							<Button variant=" btn-lg bg-light shadow-lg">Contact</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

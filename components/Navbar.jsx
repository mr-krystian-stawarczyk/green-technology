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
				backgroundColor: scrolled ? "#ffffffff" : "transparent",
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom "
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/" className="blur rounded p-1 ">
					<Image
						alt=""
						src="/assets/logo2.png"
						width="50"
						height="50"
						className="d-inline-block align-top "
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
							<Button variant=" btn-lg btn-green shadow-lg">Home</Button>
						</Nav.Link>

						<NavDropdown
							title="Products"
							id="basic-nav-dropdown"
							className=" rounded shadow-lg  mx-2 text-dark btn-green "
							style={{
								borderColor: "#cccccc",
								borderWidth: 1,
								fontSize: "1rem",
							}} // add custom styles
						>
							<NavDropdown.Item as={Link} href="products" className="">
								<Button variant=" btn-lg btn-green shadow-lg"> Products</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/solar">
								<Button variant="" className="w-100 btn-green">
									Solar Panels
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/pumps">
								<Button variant="" className="w-100 btn-green">
									Heat Pumps
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="klimatization">
								<Button variant="" className="w-100 btn-green">
									Klimatization
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={Link} href="/about" className="mx-2">
							<Button variant=" btn-lg btn-green  shadow-lg">About</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/work" className="mx-2">
							<Button variant=" btn-lg btn-green shadow-lg"> Work</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="mx-2">
							<Button variant=" btn-lg btn-green  shadow-lg">Contact</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

import React from "react";
import { useState, useEffect } from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShopping } from "react-icons/ai";
import { Container, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
const NavbarComp = () => {
	const [scrolled, setScrolled] = useState(false);
	function handleCall() {
		window.location.href = "tel:+31649932604";
	}
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
			}}
			className="nav-transition  bg-white"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/" className=" rounded p-1 ">
					<Image
						alt=""
						src="/assets/logo2.png"
						width="50"
						height="50"
						className="d-inline-block align-top "
					/>
					<span style={{ fontSize: "2rem", color: "#1196f6" }}> AM</span>
					<span style={{ color: "#35b915" }}>Green</span>
					<span style={{ color: "#1196f6" }}>ergy</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav " />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className=" rounded justify-content-end text-center "
					style={{}}
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded">
						<NavDropdown
							title="Producten"
							id="basic-nav-dropdown"
							className="rounded shadow-lg m-1 nav-blue-btn"
							style={{
								borderColor: "#cccccc",
								borderWidth: 1,

								color: "#000000", // set the default color of the title text to black
							}}
							// add this line to change the title color to white
						>
							<NavDropdown.Item as={Link} href="products" className="">
								<Button className="w-100 border-0 nav-blue-btn shadow-lg ">
									{" "}
									Producten
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="voll" className="">
								<Button className="w-100 border-0 nav-blue-btn shadow-lg ">
									{" "}
									Zonneboiler met warmtepomp
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/solar">
								<Button className="w-100 border-0 nav-blue-btn ">
									Zonnepanelen
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/pumps">
								<Button className="w-100 border-0 nav-blue-btn ">
									Warmtepompen
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/klimatization">
								<Button className="w-100 border-0 nav-blue-btn ">
									Airconditioning
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/bateries">
								<Button className="w-100 border-0 nav-blue-btn ">
									Thuis baterijen
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/warm">
								<Button className="w-100 border-0 nav-blue-btn ">
									Zonneboilers
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} href="/work" className="m-1">
							<Button className="btn-md py-2  shadow-lg nav-blue-btn border-0">
								{" "}
								Werk
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/subsidies">
							<Button className="btn-md py-2 shadow-lg nav-blue-btn border-0">
								{" "}
								Subsidies
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/about" className="m-1">
							<Button variant=" btn-md py-2  shadow-lg nav-blue-btn ">
								Over Ons
							</Button>
						</Nav.Link>{" "}
						<Button
							className="btn-md py-2  shadow-lg nav-blue-btn border-0"
							onClick={handleCall}
						>
							<MdPhoneInTalk className="m-1" />
							+31 649932604
						</Button>
						<Nav.Link as={Link} href="#contact" className="m-1">
							<Button variant=" btn-md nav-blue-bg text-white shadow-lg">
								{" "}
								Snel Kontakt
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

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
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
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
	const { t } = useTranslation();

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
				<Navbar.Brand as={Link} href="/" className=" rounded ">
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
							title={t("nav6")}
							id="basic-nav-dropdown"
							className="rounded shadow-sm m-1 nav-blue-btn"
							style={{
								borderColor: "#cccccc",
								borderWidth: 1,

								color: "#000000", // set the default color of the title text to black
							}}
							// add this line to change the title color to white
						>
							<NavDropdown.Item as={Link} href="products" className="">
								<Button className="w-100 border-0 nav-blue-btn shadow-sm ">
									{" "}
									{t("nav6")}
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="voll" className="">
								<Button className="w-100 border-0 nav-blue-btn shadow-sm ">
									{t("nav7")}
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} href="/solar">
								<Button className="w-100 border-0 nav-blue-btn ">
									{t("nav8")}
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/pumps">
								<Button className="w-100 border-0 nav-blue-btn ">
									{t("nav9")}
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/klimatization">
								<Button className="w-100 border-0 nav-blue-btn ">
									{t("nav10")}
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/bateries">
								<Button className="w-100 border-0 nav-blue-btn ">
									{t("nav11")}
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} href="/warm">
								<Button className="w-100 border-0 nav-blue-btn ">
									{t("nav12")}
								</Button>{" "}
								{/* add Bootstrap classes */}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} href="/work" className="m-1">
							<Button className="btn-md py-2  shadow-sm nav-blue-btn border-0">
								{t("nav2")}
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/subsidies">
							<Button className="btn-md py-2 shadow-sm nav-blue-btn border-0">
								{" "}
								{t("nav3")}
							</Button>
						</Nav.Link>
						<Nav.Link as={Link} href="/about" className="m-1">
							<Button variant=" btn-md py-2  shadow-sm nav-blue-btn ">
								{t("nav4")}
							</Button>
						</Nav.Link>{" "}
						<Button
							className="btn-md py-2  shadow-sm nav-blue-btn border-0"
							onClick={handleCall}
						>
							<MdPhoneInTalk className="m-1" />
							+31 649932604
						</Button>
						<Nav.Link as={Link} href="#contact" className="m-1">
							<Button variant=" btn-md nav-blue-bg text-white shadow-lg">
								{" "}
								{t("nav5")}
							</Button>
						</Nav.Link>
						<Navigation />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;

import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";

function About1() {
	const { t } = useTranslation();
	return (
		<Container
			fluid
			className="shadow-lg vh-full m-0 p-0 overflow-hidden about-bg "
		>
			<Row>
				<Col lg={8} className=" bg-dark ">
					<Card
						style={{
							width: "35rem",
							maxHeight: "15rem",
						}}
						className="header-card border-0 bg-transparent text-white p-5"
					>
						<Card.Body className="header-card-bg">
							<Card.Title className="">
								<span className="display-6">{t("ab1")}</span>
							</Card.Title>

							<span className="lead">{t("ab2")}</span>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default About1;

import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function Subsidies2() {
	const { t } = useTranslation();
	return (
		<Container className="">
			<Row className="justify-content-center align-items-center">
				<h1 className="text-center my-5 bold">{t("ss6")}</h1>
				<h5 className="py-2">
					{t("ss7")}
					<a
						href="https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-vanaf-2023"
						style={{ color: "green" }}
					>
						{t("ss8")}
					</a>
					{t("ss9")}
				</h5>{" "}
				<h5 className="py-2">{t("ss10")}</h5>
				<h5 className="py-2">
					{t("ss11")}
					<a
						href="https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-vanaf-2023"
						style={{ color: "green" }}
					>
						{t("ss12")}
					</a>
				</h5>
				<h5 className="py-2">
					{t("ss13")}
					<a
						href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/zonneboiler"
						style={{ color: "green" }}
					>
						{" "}
						{t("ss14")}
					</a>{" "}
					, {t("ss15")}
					<a
						href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp"
						style={{ color: "green" }}
					>
						{t("ss16")}
					</a>
				</h5>
				<h6 className="py-2">
					{t("ss17")}
					<a
						href="https://www.rvo.nl/subsidies-financiering/isde"
						style={{ color: "green" }}
					>
						{t("ss18")}
					</a>
				</h6>
				<h1 className="text-center my-5 bold"> {t("ss19")}</h1>
				<h5>{t("ss20")}</h5>
				<h5 className="my-3 bold"> {t("ss21")}</h5>{" "}
				<Row>
					{" "}
					<ListGroup className="rounded-0">
						<ListGroup.Item className="rounded-0">{t("ss22")}</ListGroup.Item>
						<ListGroup.Item> {t("ss23")}</ListGroup.Item>
						<ListGroup.Item>{t("ss24")}</ListGroup.Item>
						<ListGroup.Item>{t("ss25")}</ListGroup.Item>
						<ListGroup.Item>{t("ss26")}</ListGroup.Item>
						<ListGroup.Item>{t("ss27")}</ListGroup.Item>
						<ListGroup.Item>{t("ss28")}</ListGroup.Item>
						<ListGroup.Item>{t("ss29")}</ListGroup.Item>
					</ListGroup>
				</Row>
				<h5 className="my-3 bold"> {t("ss30")}</h5>
				<Row>
					<ListGroup className="rounded-0">
						<ListGroup.Item>{t("ss31")}</ListGroup.Item>
						<ListGroup.Item>{t("ss32")}</ListGroup.Item>
						<ListGroup.Item> {t("ss33")}</ListGroup.Item>
						<ListGroup.Item>{t("ss34")}</ListGroup.Item>
						<ListGroup.Item>{t("ss35")}</ListGroup.Item>
						<ListGroup.Item>{t("ss36")}</ListGroup.Item>
						<ListGroup.Item>{t("ss37")}</ListGroup.Item>
					</ListGroup>
				</Row>
				<h5 className="mt-3">
					{t("ss38")}
					<a
						href="https://mijn.rvo.nl/eloket/login-start.html"
						style={{ color: "green" }}
					>
						{t("ss39")}
					</a>{" "}
					{t("ss40")}
				</h5>
				<h5>{t("ss41")}</h5>{" "}
			</Row>
		</Container>
	);
}

export default Subsidies2;

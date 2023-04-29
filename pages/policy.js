import React from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Policy() {
	const { t } = useTranslation();
	return (
		<Container>
			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl1")}</Card.Title>
						<Card.Text>{t("pl2")}</Card.Text>
						<Card.Text>{t("pl3")}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item> {t("pl4")}</ListGroup.Item>
						<ListGroup.Item> {t("pl5")}</ListGroup.Item>
						<ListGroup.Item> {t("pl6")}</ListGroup.Item>
						<ListGroup.Item> {t("pl7")}</ListGroup.Item>
						<ListGroup.Item> {t("pl8")}</ListGroup.Item>
					</ListGroup>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl9")}</Card.Title>
						<Card.Text>{t("pl10")}</Card.Text>
						<Card.Text>{t("pl11")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl12")}</Card.Title>
						<Card.Text>{t("pl13")}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>{t("pl14")}</ListGroup.Item>
						<ListGroup.Item>{t("pl15")}</ListGroup.Item>
						<ListGroup.Item>{t("pl16")}</ListGroup.Item>
					</ListGroup>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl17")}</Card.Title>
						<Card.Text>{t("pl18")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl19")}</Card.Title>
						<Card.Text>{t("pl20")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl21")}</Card.Title>
						<Card.Text>{t("pl22")}</Card.Text>
						<Card.Text>{t("pl23")}</Card.Text>
						<Card.Text>{t("pl24")}</Card.Text>
						<Card.Text>{t("pl25")}</Card.Text>
						<Card.Text>{t("pl26")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl27")}</Card.Title>
						<Card.Text>{t("pl28")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl29")}</Card.Title>
						<Card.Text>{t("pl30")}</Card.Text>
						<Card.Text>{t("pl31")}</Card.Text>
						<Card.Text>{t("pl32")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl33")}</Card.Title>
						<Card.Text>{t("pl34")}</Card.Text>
						<Card.Text>{t("pl35")}</Card.Text>
					</Card.Body>
				</Card>
			</Row>

			<Row className="pt-5">
				<Card className="text-center">
					<Card.Body>
						<Card.Title className="bold">{t("pl36")}</Card.Title>
						<Card.Text>
							AM Greenergy Jan de Withof 106 5709 AL Helmond
						</Card.Text>
					</Card.Body>

					<ListGroup className="list-group-flush">
						<ListGroup.Item>Inschrijvingsnummer KVK: 78380758</ListGroup.Item>
						<ListGroup.Item>Telefoon: +31 649 932 604</ListGroup.Item>
						<ListGroup.Item>E-mailadres: info@izzifast.nl</ListGroup.Item>
					</ListGroup>
				</Card>
			</Row>
		</Container>
	);
}

export default Policy;

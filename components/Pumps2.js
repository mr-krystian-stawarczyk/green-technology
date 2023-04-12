import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps2() {
	return (
		<Row className="  justify-content-center align-items-center vh-full my-2 text-dark ">
			<Col xl={5} lg={5} className=" p-3 rounded blur  rounded">
				{" "}
				<Card className="border-0  bg-transparent">
					<Card.Img src="/assets/pompa.jpg " className="" />
				</Card>{" "}
			</Col>
			<Col xl={5} lg={5} className="blur p-3 mx-2 ">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Body className="">
						<h1 className=" text-dark"> Wat is een warmtepomp?</h1>
						<h5>
							Wat doet een warmtepomp in huis? Een warmtepomp haalt warmte uit
							de lucht, de bodem of het grondwater. Hiervoor gebruikt hij
							stroom, maar veel minder dan bij elektrisch verwarmen zonder
							warmtepomp. Een warmtepomp werkt eigenlijk als een omgekeerde
							koelkast. In plaats van dat hij warmte afvoert, haalt een
							warmtepomp juist warmte van buiten naar binnen.
						</h5>
						<h6>
							Je kunt je huis verwarmen met een hybride of een volledig
							elektrische warmtepomp. Een warmtepomp werkt het best in
							combinatie met goede isolatie. Zorg dus dat je huis redelijk
							geïsoleerd is voordat je een hybride warmtepomp koopt, en goed
							geïsoleerd voor je een volledige warmtepomp neemt. Hybride
							warmtepompen halen warmte meestal uit de buitenlucht. Een
							volledige warmtepomp kan ook andere bronnen gebruiken.
							Warmtepompen kun je indelen naar bronnen van warmte:
						</h6>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Pumps2;

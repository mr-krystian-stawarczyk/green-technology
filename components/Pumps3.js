import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

function Pumps3() {
	return (
		<Row className="  justify-content-center align-items-center vh-full  my-2 light ">
			<Col lg={6} className="blur p-3 mx-2  ">
				<Card
					style={{
						border: "none",
					}}
					className="bg-transparent "
				>
					<Card.Body className="">
						<h1> Hoe werkt een warmtepomp?</h1>
						<h6>
							Onder atmosferische druk kookt water bij een temperatuur van 100
							˚C. Bij gelijke druk en een constante temperatuur van 100 ˚C,
							blijft het water koken, oftewel verdampen, en vormt het zich tot
							stoom. Tijdens het koken (warmte toevoeren) kunnen we heel veel
							warmte kwijt in het water / stoom. Gebruiken we nu een snelkookpan
							om datzelfde water te koken en verdampen, dan wordt de druk en
							daarmee ook het kookpunt verhoogd en kookt het water pas bij een
							temperatuur van 120 ˚C. Omgekeerd, zouden we een glas water onder
							een vacuüm stolp zetten, dan kookt het water al bij 20 ˚C, ook
							hier moeten we nog steeds warmte toevoeren, bijvoorbeeld uit de
							omgeving.
						</h6>{" "}
						<h6>
							Het kook- en condensatiepunt van water hangt dus samen met de druk
							waarin het water zich bevindt. Bij koken kunnen de moleculen
							ontsnappen aan het water. Hoe lager de druk hoe makkelijker ze
							kunnen ontsnappen en hoe hoger de druk hoe moeilijker. Om de
							moleculen harder te laten bewegen, moet er meer energie/warmte in.
							Wanneer we warmte afvoeren of de druk verhogen, dan zal de damp
							gaan condenseren waarbij de warmte die eerder is toegevoerd
							tijdens het verdampen weer vrijkomt, de stoom condenseert dus weer
							tot water en geeft warmte af.
						</h6>
					</Card.Body>
				</Card>
			</Col>{" "}
			<Col lg={5} className=" p-3 rounded blur  rounded ">
				{" "}
				<Card className="border-0 ">
					<Card.Img src="/assets/BWP_pompa_ciepła.png" className="hover" />
				</Card>{" "}
			</Col>
		</Row>
	);
}

export default Pumps3;

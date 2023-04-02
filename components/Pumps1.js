import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Pumps1() {
	return (
		<Row className="bg-white vh-full text-center text-dark justify-content-center my-2 pt-3">
			<Row className="text-center text-dark justify-content-center">
				<Col lg={7} className="text-dark ">
					<p className="display-1 ">Heating Pumps</p>
				</Col>
			</Row>

			<Row className="text-center align-items-center justify-content-center text-dark blur ">
				<Col lg={10} className="rounded text-center text-slide shadow-lg m-2">
					<p className="lead ">
						Heating pumps are one of the most efficient and cost-effective ways
						to heat your home or business. They work by transferring heat from
						the air or ground outside to the interior of your building, making
						them much more efficient than traditional heating systems.
					</p>
				</Col>
				<Col lg={10} className="  rounded text-center text-slide shadow-lg m-2">
					<p className="lead ">
						At our company, we offer a wide range of heating pumps to suit your
						specific needs and budget. Whether youre looking for a small system
						to heat a single room or a larger system to heat your entire
						building, weve got you covered.
					</p>
				</Col>
				<Col
					lg={10}
					className=" rounded text-center px-0 text-slide shadow-lg m-2"
				>
					<p className="lead ">
						Our heating pumps are easy to install and require very little
						maintenance, making them a hassle-free solution for your heating
						needs. Theyre also environmentally friendly, as they use renewable
						energy sources to power them.
					</p>
				</Col>
			</Row>
			<Row className="text-center align-items-center"></Row>
		</Row>
	);
}

export default Pumps1;

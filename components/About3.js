import React from "react";
import { Container, ListGroup } from "react-bootstrap";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About3() {
	return (
		<Container>
			<VerticalTimeline lineColor={"black"}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2011"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>
						Start bedrijf - ontwerp en installatie van installaties elektrisch
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2013"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Toegangsautomatisering, alarm- en bewakingssystemen</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2014"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Domotica</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2017"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Recuperatie</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2018"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Fotovoltaïek</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2019"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Airconditioning</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2020"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>Warmtepompen</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;

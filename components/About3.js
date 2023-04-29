import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About3() {
	const { t } = useTranslation();
	return (
		<Container className="my-3">
			<VerticalTimeline lineColor={"black"}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2011"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5>{t("ab7")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2013"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab8")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2014"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab9")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2017"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab10")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2018"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab11")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2019"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab12")}</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2020"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<h5> {t("ab13")}</h5>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;

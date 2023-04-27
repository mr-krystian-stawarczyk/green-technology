import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About3() {
	const { t } = useTranslation();
	return (
		<Container>
			<VerticalTimeline lineColor={"black"}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2011"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p>{t("ab7")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2013"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab8")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2014"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab9")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2017"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab10")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2018"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab11")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2019"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab12")}</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2020"
					iconStyle={{ background: "rgba(40, 167, 69, 1)", color: "#fff" }}
				>
					<p> {t("ab13")}</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About3;

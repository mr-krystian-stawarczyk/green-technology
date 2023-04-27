import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = React.useState(true);
	const { t } = useTranslation();
	React.useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<Row className="justify-content-center text-center sticky mt-5">
			<Col className="bg-dark rounded ">
				<Col className="fixed inset-0 bg-slate-700 bg-opacity-70">
					<Col className="fixed bottom-0 left-0 right-0 my-2 flex items-center justify-between px-4 py-8 bg-gray-100">
						<Row>
							<span className="text-light text-base "> {t("cookie1")}</span>
							<span className="text-light text-base ">{t("cookie2")}</span>{" "}
							<span className="text-light text-base "> {t("cookie3")}</span>
						</Row>

						<Button
							className="nav-blue-bg my-2 py-2 px-8 rounded text-white border-0"
							onClick={() => acceptCookie()}
						>
							Accept
						</Button>
					</Col>
				</Col>
			</Col>
		</Row>
	);
};

export default CookieConsent;

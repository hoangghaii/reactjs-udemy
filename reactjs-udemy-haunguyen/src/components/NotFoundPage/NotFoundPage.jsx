import React from "react";
import "./NotFoundPage.scss";
import { Link } from "react-router-dom";

function NotFoundPage(props) {
	const goBack = () => {
		props.history.goBack();
	};

	return (
		<section className="page_404">
			<div className="container text-center">
				<div className="four_zero_four_bg">
					<h1 className="text-center ">404</h1>
				</div>

				<div className="contant_box_404">
					<h3 className="h2 font-medium">Look like you're lost</h3>

					<p className="font-normal">
						the page you are looking for not avaible!
					</p>

					<div className="buttons-con">
						<span
							className="link-button link-back-button"
							onClick={goBack}
						>
							Go Back
						</span>

						<Link to="/">
							<span className="link-button">Go to Home Page</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

NotFoundPage.propTypes = {};

export default NotFoundPage;

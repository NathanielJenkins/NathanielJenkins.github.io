import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import LyricClassifier from "./components/LyricClassifier";
import Simulation from "./components/Simulation";
import CourseMap from "./components/CourseMap";
import Contact from "./components/Contact";
import RayTracer from "./components/RayTracer";
import ComputerArt from "./components/ComputerArt";
import ECommerceDesign from "./components/ECommerceDesign";
import AuthenticationReport from "./components/AuthenticationReport";
import PrivacyPolicy from "./components/PrivacyPolicy";

import { Helmet } from "react-helmet";

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Styled = styled.div`
	overflow: hidden;

	.hr {
		height: 5px;
		width: 25%;
		background-color: white;
		border-radius: 2px;
	}

	h1 {
		font-family: "Helvetica Neue", sans-serif;
		font-size: 54px;
		font-weight: 200;
		letter-spacing: 5px;
	}

	h2 {
		color: #111;
		font-family: "Open Sans", sans-serif;
		font-size: 30px;
		font-weight: 300;
		line-height: 32px;
		margin: 0 0 72px;
		text-align: center;
	}

	h3 {
		font-family: "Helvetica Neue", sans-serif;
		font-size: 30px;
		font-weight: 200;
		letter-spacing: 5px;
	}

	h4 {
		font-family: "Helvetica Neue", sans-serif;
		font-size: 24px;
		font-weight: 300;
		letter-spacing: 3px;
	}

	.title {
		font-family: "eurostile", sans-serif;
		font-weight: 800;
	}

	p {
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		// font-weight: 400;
		line-height: 32px;
		margin: 0 0 24px;
	}
`;

class App extends Component {
	componentDidMount() {
		AOS.init();
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Helmet>
					<meta
						name="google-site-verification"
						content="w1Aj0TZYDAfiZJinycZxOwvcPNGnhf258OUaQoWp3vk"
					/>
				</Helmet>
				<Styled>
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + "/"}>
							<Home />
						</Route>
						<Route
							exact
							path={process.env.PUBLIC_URL + "/projects/lyricclassifier"}
						>
							<LyricClassifier />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/simulation"}>
							<Simulation />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/coursemap"}>
							<CourseMap />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/raytracer"}>
							<RayTracer />
						</Route>

						<Route exact path={process.env.PUBLIC_URL + "/contact"}>
							<Contact />
						</Route>

						<Route
							exact
							path={process.env.PUBLIC_URL + "/projects/computer_art"}
						>
							<ComputerArt />
						</Route>
						<Route
							exact
							path={process.env.PUBLIC_URL + "/projects/e-commerce_design"}
						>
							<ECommerceDesign />
						</Route>
						<Route
							exact
							path={process.env.PUBLIC_URL + "/blog/authentication_report"}
						>
							<AuthenticationReport />
						</Route>
						<Route
							exact
							path={process.env.PUBLIC_URL + "/sudokuMobile/privacyPolicy"}
						>
							<PrivacyPolicy />
						</Route>
					</Switch>
				</Styled>
			</Router>
		);
	}
}

export default App;

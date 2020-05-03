import React, { Component } from "react";
import styled from "styled-components";
import heatmap from "../img/heatmap.png";

const Styled = styled.div`
	overflow: hidden;
	.pinContainer {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	.pinContainer .panel {
		height: inherit;
		width: inherit;
		position: absolute;
		text-align: center;
	}
	.panel {
		color: white;

		position: relative;
		display: block;

		&.display-1 {
			font-weight: 100;
			letter-spacing: 5px;
		}
		&.display-3 {
			font-weight: 200;
		}
		&.display-4 {
			color: darkslategrey;
		}
	}
	h2 {
		color: grey;
	}
`;

class ProjectSection extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<div className="pinContainer">
					<section className={this.props.panelClass}>
						<h1 className="mt-4">{this.props.title}</h1>
						<h2>{this.props.subtitle}</h2>

						<div className="img-container">
							<img className="p-4 img-fluid" src={this.props.svg}></img>
						</div>
					</section>
				</div>
			</Styled>
		);
	}
}

export default ProjectSection;

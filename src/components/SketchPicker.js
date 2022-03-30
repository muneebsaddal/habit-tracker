import React from "react";
import reactCSS from "reactcss";
import { SketchPicker, TwitterPicker, CirclePicker  } from "react-color";

class SketchExample extends React.Component {
	state = {
		displayColorPicker: false,
		color: {
			r: "0",
			g: "100",
			b: "200",
			a: "1",
		},
	};

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	handleChange = (color) => {
		this.setState({ color: color.rgb });
	};

	render() {
		const styles = reactCSS({
			default: {
				color: {
					width: "36px",
					height: "22px",
					borderRadius: "2px",
					background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
				},
				swatch: {
					padding: "0px 8px",
					background: "#fff",
					borderRadius: "1px",
					boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
					display: "inline-block",
					cursor: "pointer",
				},
				popover: {
					position: "absolute",
					transform: "scaleX(-1)",
					transformOrigin: "22px 0px",
					background: "white",
					padding: "10px",
					borderRadius: "15px",
					border: "1px solid rgb(160, 160, 160)"
				},
				cover: {
					position: "fixed",
					top: "0px",
					right: "0px",
					bottom: "0px",
					left: "0px",
				},
			},
		});

		return (
			<div>
				<div style={styles.swatch} onClick={this.handleClick}>
					<div style={styles.color} />
				</div>
				{this.state.displayColorPicker ? (
					<div style={styles.popover}>
						<div style={styles.cover} onClick={this.handleClose} />
						<CirclePicker
							color={this.state.color}
							onChange={this.handleChange}
						/>
					</div>
				) : null}
			</div>
		);
	}
}

export default SketchExample;

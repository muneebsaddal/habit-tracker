import React, { useState } from "react";
import "../habitForm.css";
import Modal from "react-modal";
import FormHeader from "../formHeader/FormHeader";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";

function HabitForm_B(props) {
	const [time, setTime] = useState("8:59pm");

	const [colorState, setColorState] = useState({
		displayColorPicker: false,
		color: "#267E92",
	});

	const handleColorClick = () => {
		setColorState({ displayColorPicker: !colorState.displayColorPicker });
	};

	const handleColorClose = () => {
		setColorState({ displayColorPicker: false });
	};

	const handleColorChange = (color) => {
		props.colorChange(color.hex);
	};

	const styles = reactCSS({
		default: {
			color: {
				width: "36px",
				height: "22px",
				borderRadius: "2px",
				background: `${colorState.color}`,
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
				border: "1px solid rgb(160, 160, 160)",
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
		<div className="form-modal-container">
			<Modal
				isOpen={props.openFormB}
				onRequestClose={props.handleFormClose}
				className="form-modal"
				ariaHideApp={false}
			>
				<FormHeader handleFormClose={props.handleFormClose} />
				<form>
					<div className="input-group input-group-name">
						<label>Name</label>
						<input type="text" placeholder="e.g. Run" />
						<div className="input-group input-group-color">
							<label>Color</label>
							<div>
								<div
									style={styles.swatch}
									onClick={handleColorClick}
								>
									<div style={styles.color} />
								</div>
								{colorState.displayColorPicker ? (
									<div style={styles.popover}>
										<div
											style={styles.cover}
											onClick={handleColorClose}
										/>
										<CirclePicker
											color={colorState.color}
											onChange={handleColorChange}
										/>
									</div>
								) : null}
							</div>
						</div>
					</div>

					<div className="input-group">
						<label>Question</label>
						<input
							type="text"
							placeholder="e.g. How many miles did you run?"
						/>
					</div>

					<div className="input-group">
						<label>Unit</label>
						<input type="text" placeholder="e.g. miles" />
					</div>

					<div className="form-input-column">
						<div className="input-group">
							<label>Target</label>
							<input type="text" placeholder="e.g. 15" />
						</div>
						<div className="input-group">
							<label>Frequency</label>
							<button
								type="button"
								onClick={props.handleOpenFreqDialog}
							>
								Every day
							</button>
							<Modal
								isOpen={props.openFreqDialog}
								onRequestClose={props.closeFreqDialog}
								className="form-frequency-dialog"
								ariaHideApp={false}
							>
								<form className="freq-dialog-container">
									<div className="dialog-input-container">
										<input
											type="radio"
											id="everyday"
											name="radio"
											value=""
											className="freq-dialog-radio-input"
										/>
										<span className="radio-button"></span>
										<label htmlFor="everyday">
											Every day
										</label>
									</div>
									<div className="dialog-input-container">
										<input
											type="radio"
											id="every_days"
											name="radio"
											value=""
											className="freq-dialog-radio-input"
										/>
										<span className="radio-button"></span>
										<label htmlFor="every_days">
											Every{" "}
											<input
												className="freq-dialog-number-input"
												type="number"
												min="0"
												max="99"
											/>{" "}
											days
										</label>
									</div>
									<div className="dialog-input-container">
										<input
											type="radio"
											id="times_per_week"
											name="radio"
											value=""
											className="freq-dialog-radio-input"
										/>
										<span className="radio-button"></span>
										<label htmlFor="times_per_week">
											<input
												className="freq-dialog-number-input"
												type="number"
												min="0"
												max="99"
											/>{" "}
											times per week
										</label>
									</div>
									<div className="dialog-input-container">
										<input
											type="radio"
											id="times_per_month"
											name="radio"
											value=""
											className="freq-dialog-radio-input"
										/>
										<span className="radio-button"></span>
										<label htmlFor="times_per_month">
											<input
												className="freq-dialog-number-input"
												type="number"
												min="0"
												max="99"
											/>{" "}
											times per month
										</label>
									</div>

									<button
										className="freq-dialog-submit"
										type="submit"
									>
										SAVE
									</button>
								</form>
							</Modal>
						</div>
					</div>

					<div className="input-group">
						<label>Reminder</label>
						<button
							type="button"
							onClick={props.handleOpenReminderDialog}
						>
							off
						</button>
						<Modal
							isOpen={props.openReminderDialog}
							onRequestClose={props.closeReminderDialog}
							className="form-reminder-dialog"
							ariaHideApp={false}
						>
							<Timekeeper
								className="form-reminder-dialog"
								onRequestClose={props.closeReminderDialog}
								time={props.getTime}
								onChange={(data) => setTime(data.formatted12)}
								onDoneClick={props.changeTime(time)}
							/>
						</Modal>
					</div>
					<div className="input-group">
						<label>Notes</label>
						<input type="text" placeholder="(Optional)" />
					</div>
				</form>
			</Modal>
		</div>
	);
}

export default HabitForm_B;

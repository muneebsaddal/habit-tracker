import React, { useState } from "react";
import "./habitForm.css";
import Modal from "react-modal";
import FormHeader from "./formComponents/FormHeader";
import FrequencyDialog from "./formComponents/FrequencyDialog";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";

function HabitFormMeasurable(props) {
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
				background: `${props.formData.color}`,
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
						<input
							type="text"
							placeholder="e.g. Run"
							onChange={props.handleFormChange}
							name="name"
							value={props.formData.name}
						/>
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
							onChange={props.handleFormChange}
							name="question"
							value={props.formData.question}
						/>
					</div>
					<div className="input-group">
						<label>Unit</label>
						<input
							type="text"
							placeholder="e.g. miles"
							onChange={props.handleFormChange}
							name="unit"
							value={props.formData.unit}
						/>
					</div>

					<div className="form-input-column">
						<div className="input-group">
							<label>Target</label>
							<input
								type="text"
								placeholder="e.g. 15"
								onChange={props.handleFormChange}
								name="target"
								value={props.formData.target}
							/>
						</div>
						<div className="input-group">
							<label>Frequency</label>
							<button
								type="button"
								onClick={props.handleOpenFreqDialog}
							>
								{props.formData.frequency
									? props.formData.frequency
									: "Everyday"}
							</button>
							{props.openFreqDialog && (
								<FrequencyDialog
									formData={props.formData}
									freqChange={props.freqChange}
									tempFreqValue={props.tempFreqValue}
									isOpen={props.openFreqDialog}
									requestClose={props.closeFreqDialog}
								/>
							)}
						</div>
					</div>

					<div className="input-group">
						<label>Reminder</label>
						<button
							type="button"
							onClick={props.handleOpenReminderDialog}
						>
							{props.formData.reminder === ""
								? "off"
								: props.formData.reminder}
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
								onChange={(data) =>
									props.timeSubmit(data.formatted12)
								}
								onDoneClick={props.changeTime(props.getTime)}
							/>
						</Modal>
					</div>
					<div className="input-group">
						<label>Notes</label>
						<input
							type="text"
							placeholder="(Optional)"
							onChange={props.handleFormChange}
							name="notes"
							value={props.formData.notes}
						/>
					</div>
					<div className="form-button-group">
						<button
							className="form-buttons form-button-cancel"
							onClick={props.handleFormClose}
						>
							CANCEL
						</button>
						<button
							type="submit"
							onClick={props.handleFormSubmit}
							className="form-buttons form-button-submit"
						>
							SAVE
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}

export default HabitFormMeasurable;

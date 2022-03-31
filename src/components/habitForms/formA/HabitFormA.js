import React, { useState, useEffect } from "react";
import "../habitForm.css";
import Modal from "react-modal";
import FormHeader from "../formHeader/FormHeader";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";

function HabitForm_A(props) {
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

	const numberOptionSelect = Array.from(Array(31).keys());

	const [freq, setFreq] = useState({
		repeatValue: "",
		repeatCat: "",
	});

	let numberTest = /\d/;

	const handleFrequencyChange = (f) => {
		numberTest.test(f.target.value)
			? setFreq((prevState) => {
					return {
						...prevState,
						repeatValue: f.target.value,
					};
			  })
			: setFreq((prevState) => {
					return {
						...prevState,
						repeatCat: f.target.value,
					};
			  });
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			props.freqChange(freq.repeatValue + " time/s a " + freq.repeatCat);
		}, 1000);
		return () => clearTimeout(timer);
	});

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
				isOpen={props.openFormA}
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
							placeholder="e.g. Exercise"
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
							placeholder="e.g. Did you exercise today?"
							onChange={props.handleFormChange}
							name="question"
							value={props.formData.question}
						/>
					</div>
					<div className="input-group">
						<label>Frequency</label>
						<div className="input-group-frequency">
							<select
								value={freq.repeatValue}
								onChange={handleFrequencyChange}
							>
								{numberOptionSelect.map((x, y) => (
									<option key={y}>{x}</option>
								))}
							</select>{" "}
							time/s a{" "}
							<select
								value={freq.repeatCat}
								onChange={handleFrequencyChange}
							>
								<option>week</option>
								<option>month</option>
							</select>
						</div>

						{/* <button
							type="button"
							onClick={props.handleOpenFreqDialog}
						>
							Every day
						</button> */}
						{/* <Modal
							isOpen={props.openFreqDialog}
							onRequestClose={props.closeFreqDialog}
							className="form-frequency-dialog"
							ariaHideApp={false}
						>
							<FreqencyDialog formData={props.formData} handleFormChange={props.handleFormChange}/>
						</Modal> */}
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
					<div>
						<button type="submit" onClick={props.handleFormSubmit}>
							SAVE
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}

export default HabitForm_A;

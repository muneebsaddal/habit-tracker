import { Field } from "react-final-form";
import Modal from "react-modal";
import LoadSaveReinitializeForm from "./LoadSaveReinitializeForm";

import React, { useState } from "react";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";
import FrequencyDialog from "../../habitForms/formComponents/FrequencyDialog";
import FormHeader from "../../habitForms/formComponents/FormHeader";

const EditHabitForm = (props) => {
	const [colorState, setColorState] = useState({
		displayColorPicker: false,
		color: `${props.habit.color}`,
	});

	const handleColorClick = () => {
		setColorState({ displayColorPicker: !colorState.displayColorPicker });
	};

	const handleColorClose = () => {
		setColorState({ displayColorPicker: false });
	};

	const handleColorChange = (color) => {
		setColorState({ displayColorPicker: false, color: color.hex });
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
				margin: "0px 8px",
				padding: "0px",
				background: "#fff",
				borderRadius: "1px",
				boxShadow: "none",
				display: "inline-block",
				cursor: "pointer",
				border: "none",
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

	const [tempFreqValue, setTempFreqValue] = useState("");

	const handleTempFreqValue = (e) => {
		setTempFreqValue(e.target.value);
	};

	const [frequencyValue, setFrequencyValue] = useState("Everyday");
	const handleFreqChange = (value) => {
		setFrequencyValue(value.target.value.replace("_", tempFreqValue));
	};

	const [reminderValue, setReminderValue] = useState("0:00am");
	// const handleTimeChange = (data) => {
	// 	setReminderValue(data);
	// };

	const handleTimeSubmit = (data) => {
		setReminderValue(data === "0:00am" ? "off" : data);
	};

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	let record = {
		name: props.habit.name,
		color: props.habit.color,
		question: props.habit.question,
		frequency: props.habit.frequency,
		reminder: props.habit.reminder,
		notes: props.habit.notes,
		target: props.habit.target,
		unit: props.habit.unit,
	};

	const load = async () => {
		console.info("Loading...");
		await sleep(1500);
		console.info("Loaded...");
		return record;
	};

	const save = async (values) => {
		console.info("Saving", values);
		await sleep(1500);

		record = values;
		props.handleUpdateFormSubmit(record);
	};

	const postLoadFormat = (values) => {
		const {
			name,
			color,
			question,
			frequency,
			reminder,
			notes,
			target,
			unit,
		} = values;
		return {
			name,
			color,
			question,
			frequency,
			reminder,
			notes,
			target,
			unit,
		};
	};

	const preSaveFormat = (values, originalValues) => {
		return {
			...originalValues,
			name: values.name,
			color: colorState.color,
			question: values.question,
			frequency: frequencyValue,
			reminder: reminderValue,
			notes: values.reminder,
			target: values.target,
			unit: values.unit,
		};
	};

	const Error = ({ name }) => (
		<Field
			name={name}
			subscription={{ error: true, touched: true }}
			render={({ meta: { error, touched } }) =>
				touched && error ? <span>{error}</span> : null
			}
		/>
	);

	const loading = <div className="loading">Loading...</div>;

	const validate = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = "Required";
		}
		return errors;
	};

	return (
		<Modal isOpen={props.isOpen} style={modalStyles} ariaHideApp={false}>
			<FormHeader title="Edit Habit" />
			<LoadSaveReinitializeForm
				load={load}
				loading={loading}
				postLoadFormat={postLoadFormat}
				preSaveFormat={preSaveFormat}
				save={save}
				validate={validate}
			>
				{({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<div className="input-group input-group-name">
							<label>Name</label>
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="e.g. Exercise"
								disabled={submitting}
							/>
							<Error name="name" />
							<div className="input-group input-group-color">
								<label>Color</label>
								<div>
									<button
										type="button"
										style={styles.swatch}
										onClick={handleColorClick}
									>
										<div style={styles.color} />
									</button>
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
								<Error name="color" />
							</div>
						</div>
						<div className="input-group">
							<label>Question</label>
							<Field
								name="question"
								component="input"
								type="text"
								placeholder="e.g. Did you exercise today?"
								disabled={submitting}
							/>
							<Error name="question" />
						</div>
						<div className="input-group">
							<label>Frequency</label>
							<button
								type="button"
								onClick={props.handleOpenFreqDialog}
							>
								{props.habit.frequency === ""
									? frequencyValue
									: props.habit.frequency}
							</button>
							{props.openFreqDialog && (
								<FrequencyDialog
									formData={props.habit}
									freqChange={handleFreqChange}
									tempFreqValue={handleTempFreqValue}
									isOpen={props.openFreqDialog}
									requestClose={props.closeFreqDialog}
								/>
							)}
							<Error name="frequency" />
						</div>
						<div className="input-group">
							<label>Reminder</label>
							<button
								type="button"
								onClick={props.handleOpenReminderDialog}
							>
								{props.habit.reminder === ""
									? reminderValue === "0:00am"
										? "off"
										: reminderValue
									: props.habit.reminder}
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
									time={reminderValue}
									onChange={(data) =>
										handleTimeSubmit(data.formatted12)
									}
								/>
							</Modal>
							<Error name="reminder" />
						</div>
						<div className="input-group">
							<label>Notes</label>
							<Field
								name="notes"
								component="input"
								type="text"
								placeholder="optional"
								disabled={submitting}
							/>
							<Error name="notes" />
						</div>
						<div className="form-button-group">
							<button
								name="submit"
								className="form-buttons form-button-submit"
								type="submit"
								disabled={submitting}
							>
								Submit
							</button>
							<button
								className="form-buttons form-button-cancel"
								type="button"
								onClick={props.closeEditForm}
								disabled={submitting}
							>
								Cancel
							</button>
						</div>
					</form>
				)}
			</LoadSaveReinitializeForm>
		</Modal>
	);
};

const modalStyles = {
	content: {
		background: "white",
		height: "100%",
		inset: "0px",
		border: "none",
		width: "100%",
		padding: "0px",
		borderRadius: "0px",
		margin: "0px",
		display: "flex",
		flexDirection: "column",
	},
};

export default EditHabitForm;

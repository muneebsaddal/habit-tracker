// import styled from "styled-components";
import React, { useState } from "react";
import Modal from "react-modal";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";
import FrequencyDialog from "../../habitForms/formComponents/FrequencyDialog";
import FormHeader from "../../habitForms/formComponents/FormHeader";

const EditHabitForm = (props) => {
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
		setColorState({ displayColorPicker: false });
	};

	const styles = reactCSS({
		default: {
			color: {
				width: "36px",
				height: "22px",
				borderRadius: "2px",
				background: `${props.currentHabit.color}`,
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
	return (
		<Modal isOpen={props.isOpen} style={modalStyles} ariaHideApp={false}>
			<FormHeader title="Edit Habit" />
			<form>
				<div className="input-group input-group-name">
					<label>Name</label>
					<input
						type="text"
						placeholder="e.g. Exercise"
						onChange={props.handleUpdateForm}
						name="name"
						value={props.currentHabit.name}
					/>
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
					</div>
				</div>

				<div className="input-group">
					<label>Question</label>
					<input
						type="text"
						placeholder="e.g. Did you exercise today?"
						onChange={props.handleUpdateForm}
						name="question"
						value={props.currentHabit.question}
					/>
				</div>
				<div className="input-group">
					<label>Frequency</label>
					<button type="button" onClick={props.handleOpenFreqDialog}>
						{props.currentHabit.frequency
							? props.currentHabit.frequency
							: "Everyday"}
					</button>
					{props.openFreqDialog && (
						<FrequencyDialog
							formData={props.currentHabit}
							freqChange={props.freqChange}
							tempFreqValue={props.tempFreqValue}
							isOpen={props.openFreqDialog}
							requestClose={props.closeFreqDialog}
						/>
					)}
				</div>
				<div className="input-group">
					<label>Reminder</label>
					<button
						type="button"
						onClick={props.handleOpenReminderDialog}
					>
						{props.currentHabit.reminder === ""
							? "off"
							: props.currentHabit.reminder}
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
						onChange={props.handleUpdateForm}
						name="notes"
						value={props.currentHabit.notes}
					/>
				</div>
				<div className="form-button-group">
					<button
						className="form-buttons form-button-cancel"
						onClick={props.closeEditForm}
						type="button"
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

import React, { useState, useContext } from "react";
import { FormContext } from "../../../FormProvider";
import { Link } from "react-router-dom";
import "../../habitForm.css";
import Modal from "react-modal";
import FormHeader from "../../formComponents/formHeader/FormHeader";
import FrequencyDialog from "../../formComponents/frequencyDialog/FrequencyDialog";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";
import NameError from "../../formComponents/NameError";

const FormMeasurableR = () => {
	const {
		handleFreqDialogOpenB,
		handleReminderDialogOpenB,
		dialogsFormB,
		handleFreqDialogCloseB,
		handleReminderDialogCloseB,
		time,
		handleTimeChange,
		handleColorChanges,
		handleTimeSubmit,
		dataForm,
		handleChangeForm,
		handleSubmitForm,
		handleFrequencyChange,
		handleTempFreqValue,
		nameFlag,
		handleNameFlag,
	} = useContext(FormContext);

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
		handleColorChanges(color.hex);
		setColorState({ displayColorPicker: false });
	};

	const styles = reactCSS({
		default: {
			color: {
				width: "36px",
				height: "22px",
				borderRadius: "2px",
				background: `${dataForm.color}`,
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
		<>
			<FormHeader title="Create Habit" />
			<form>
				<div className="input-group input-group-name">
					<label>Name</label>
					<input
						type="text"
						placeholder="e.g. Run"
						onChange={handleChangeForm}
						onClick={handleNameFlag}
						name="name"
						id="name"
						value={dataForm.name}
						required
					/>
					{nameFlag && <NameError />}

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
						placeholder="e.g. How many miles did you run?"
						onChange={handleChangeForm}
						name="question"
						value={dataForm.question}
					/>
				</div>
				<div className="input-group">
					<label>Unit</label>
					<input
						type="text"
						placeholder="e.g. miles"
						onChange={handleChangeForm}
						name="unit"
						value={dataForm.unit}
					/>
				</div>

				<div className="form-input-column">
					<div className="input-group">
						<label>Target</label>
						<input
							type="number"
							min="1"
							placeholder="e.g. 15"
							onChange={handleChangeForm}
							name="target"
							value={dataForm.target}
						/>
					</div>
					<div className="input-group">
						<label>Frequency</label>
						<button
							type="button"
							title="frequencyButtonMeasurable"
							onClick={handleFreqDialogOpenB}
						>
							{dataForm.frequency
								? dataForm.frequency
								: "Everyday"}
						</button>
						{dialogsFormB.freqDialog && (
							<FrequencyDialog
								dataForm={dataForm}
								freqChange={handleFrequencyChange}
								tempFreqValue={handleTempFreqValue}
								isOpen={dialogsFormB.freqDialog}
								requestClose={handleFreqDialogCloseB}
							/>
						)}
					</div>
				</div>

				<div className="input-group">
					<label>Reminder</label>
					<button
						type="button"
						title="reminderButtonMeasurable"
						onClick={handleReminderDialogOpenB}
					>
						{dataForm.reminder === "" ? "off" : dataForm.reminder}
					</button>
					<Modal
						isOpen={dialogsFormB.reminderDialog}
						onRequestClose={handleReminderDialogCloseB}
						className="form-reminder-dialog"
						ariaHideApp={false}
					>
						<Timekeeper
							className="form-reminder-dialog"
							onRequestClose={handleReminderDialogCloseB}
							time={time}
							onChange={(data) =>
								handleTimeSubmit(data.formatted12)
							}
							onDoneClick={handleTimeChange(time)}
						/>
					</Modal>
				</div>
				<div className="input-group">
					<label>Notes</label>
					<input
						type="text"
						placeholder="(Optional)"
						onChange={handleChangeForm}
						name="notes"
						value={dataForm.notes}
					/>
				</div>
				<div className="form-button-group">
					<button
						type="submit"
						title="YesNoFormSubmit"
						onClick={handleSubmitForm}
						className="form-buttons form-button-submit"
					>
						<Link
							to="/"
							style={{
								textDecoration: "none",
								color: "rgb(242, 250, 255)",
								padding: "10px 40px 10px 40px",
								height: "40px",
								background: "#006eff",
								boxSizing: "border-box",
								borderRadius: "5px",
								fontFamily: "Karla",
								fontWeight: "600",
								fontSize: "20px",
								letterSpacing: "0.06em",
								cursor: "pointer",
							}}
						>
							SAVE
						</Link>
					</button>

					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "#444",
							padding: "10px 25px 10px 25px",
							height: "40px",
							background: "none",
							boxSizing: "border-box",
							borderRadius: "5px",
							border: "2px solid #888",
							fontFamily: "Karla",
							fontWeight: "600",
							fontSize: "18px",
							letterSpacing: "0.06em",
							cursor: "pointer",
						}}
					>
						<button
							className="form-buttons form-button-cancel"
							title="YesNoFormCancel"
						>
							CANCEL
						</button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default FormMeasurableR;

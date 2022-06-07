import React, { useState, useContext } from "react";
import { FormContext } from "../../../FormProvider";
import "../../habitForm.css";
import Modal from "react-modal";
import FormHeader from "../../formComponents/formHeader/FormHeader";
import FrequencyDialog from "../../formComponents/frequencyDialog/FrequencyDialog";
import Timekeeper from "react-timekeeper";
import { CirclePicker } from "react-color";
import reactCSS from "reactcss";
import NameError from "../../formComponents/NameError";
import { Link } from "react-router-dom";

const FormMeasurableR = () => {
	const {
		handleFreqDialogOpenA,
		handleReminderDialogOpenA,
		dialogsFormA,
		handleFreqDialogCloseA,
		handleReminderDialogCloseA,
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
						placeholder="e.g. Exercise"
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
						placeholder="e.g. Did you exercise today?"
						onChange={handleChangeForm}
						name="question"
						value={dataForm.question}
					/>
				</div>
				<div className="input-group">
					<label>Frequency</label>
					<button
						type="button"
						title="frequencyButtonYesNo"
						onClick={handleFreqDialogOpenA}
					>
						{dataForm.frequency ? dataForm.frequency : "Everyday"}
					</button>
					{dialogsFormA.freqDialog && (
						<FrequencyDialog
							formData={dataForm}
							freqChange={handleFrequencyChange}
							tempFreqValue={handleTempFreqValue}
							isOpen={dialogsFormA.freqDialog}
							requestClose={handleFreqDialogCloseA}
						/>
					)}
				</div>
				<div className="input-group">
					<label>Reminder</label>
					<button
						type="button"
						title="reminderButtonYesNo"
						onClick={handleReminderDialogOpenA}
					>
						{dataForm.reminder === "" ? "off" : dataForm.reminder}
					</button>
					<Modal
						isOpen={dialogsFormA.reminderDialog}
						onRequestClose={handleReminderDialogCloseA}
						className="form-reminder-dialog"
						ariaHideApp={false}
					>
						<Timekeeper
							className="form-reminder-dialog"
							onRequestClose={handleReminderDialogCloseA}
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

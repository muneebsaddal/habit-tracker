import React from "react";
import Modal from "react-modal";
import FormMeasurable from "./addHabitForms/addHabitMeasurableForm/FormMeasurable";
import FormYesNo from "./addHabitForms/addHabitYesNoForm/FormYesNo";

function AddHabitFormModal(props) {
	return (
		<div>
			{props.openFormB ? (
				<Modal
					isOpen={props.openFormB}
					onRequestClose={props.handleFormClose}
					className="form-modal"
					ariaHideApp={false}
				>
					<FormMeasurable
						openFormB={props.openFormB}
						handleFormClose={props.handleFormClose}
						handleOpenFreqDialog={props.handleOpenFreqDialog}
						handleOpenReminderDialog={
							props.handleOpenReminderDialog
						}
						openFreqDialog={props.openFreqDialog}
						openReminderDialog={props.openReminderDialog}
						closeFreqDialog={props.closeFreqDialog}
						closeReminderDialog={props.closeReminderDialog}
						getTime={props.getTime}
						changeTime={props.changeTime}
						colorChange={props.colorChange}
						timeSubmit={props.timeSubmit}
						formData={props.formData}
						handleFormChange={props.handleFormChange}
						handleFormSubmit={props.handleFormSubmit}
						freqChange={props.freqChange}
						tempFreqValue={props.tempFreqValue}
					/>
				</Modal>
			) : props.openFormA ? (
				<Modal
					isOpen={props.openFormA}
					onRequestClose={props.handleFormClose}
					className="form-modal"
					ariaHideApp={false}
				>
					<FormYesNo
						openFormA={props.openFormA}
						handleFormClose={props.handleFormClose}
						handleOpenFreqDialog={props.handleOpenFreqDialog}
						handleOpenReminderDialog={
							props.handleOpenReminderDialog
						}
						openFreqDialog={props.openFreqDialog}
						openReminderDialog={props.openReminderDialog}
						closeFreqDialog={props.closeFreqDialog}
						closeReminderDialog={props.closeReminderDialog}
						getTime={props.getTime}
						changeTime={props.changeTime}
						colorChange={props.colorChange}
						timeSubmit={props.timeSubmit}
						formData={props.formData}
						handleFormChange={props.handleFormChange}
						handleFormSubmit={props.handleFormSubmit}
						freqChange={props.freqChange}
						tempFreqValue={props.tempFreqValue}
					/>
				</Modal>
			) : (
				<></>
			)}
		</div>
	);
}

export default AddHabitFormModal;

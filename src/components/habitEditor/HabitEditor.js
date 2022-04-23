import Modal from "react-modal";
import HabitEditorHeader from "./habitEditorComponents/HabitEditorHeader";
import EditHabitForm from "./habitEditorComponents/EditHabitForm";
import HabitEditorReminder from "./habitEditorComponents/HabitEditorReminder";
import HabitEditorNotes from "./habitEditorComponents/HabitEditorNotes";
import HabitEditorOverview from "./habitEditorComponents/HabitEditorOverview";
import HabitEditorScore from "./habitEditorComponents/HabitEditorScore";
import HabitEditorHistory from "./habitEditorComponents/HabitEditorHistory";
import HabitEditorCalender from "./habitEditorComponents/HabitEditorCalender";
import HabitEditorStreaks from "./habitEditorComponents/HabitEditorStreaks";
import { useState } from "react";

const HabitEditor = (props) => {
	const daysInMonth = (month, year) => {
		return new Date(year, month, 0).getDate();
	};

	const daysIntoYear = (date) => {
		return (
			(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
				Date.UTC(date.getFullYear(), 0, 0)) /
			24 /
			60 /
			60 /
			1000
		);
	};

	const habitCheckList = props.getCheckedList(props.habit.name);

	const [editHabit, setEditHabit] = useState(false);
	const handleEditHabitForm = (e) => {
		setEditHabit((prevState) => !prevState);
	};

	return (
		<>
			<Modal
				isOpen={props.habitEditorState}
				style={modalStyles}
				ariaHideApp={false}
			>
				<HabitEditorHeader
					habitName={props.habit.name}
					habitEditorClose={props.habitEditorClose}
					handleEditHabitForm={handleEditHabitForm}
				/>
				<HabitEditorReminder
					question={props.habit.question}
					frequency={props.habit.frequency}
					reminder={props.habit.reminder}
				/>
				{props.habit.notes && (
					<HabitEditorNotes notes={props.habit.notes} />
				)}
				<HabitEditorOverview
					color={props.habit.color}
					habitCheckList={habitCheckList}
					getDaysInMonth={daysInMonth}
				/>
				<HabitEditorScore
					name={props.habit.name}
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitEditorHistory
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitEditorCalender
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitEditorStreaks
					habitCheckList={habitCheckList}
					daysIntoYear={daysIntoYear}
				/>
			</Modal>
			<EditHabitForm
				isOpen={editHabit}
				currentHabit={props.habit}
				closeEditForm={handleEditHabitForm}
				colorChange={props.colorChange}
				getTime={props.getTime}
				changeTime={props.changeTime}
				handleFormChange={props.handleFormChange}
				handleFormSubmit={props.handleFormSubmit}
				freqChange={props.freqChange}
				tempFreqValue={props.tempFreqValue}
				handleOpenFreqDialog={props.handleOpenFreqDialog}
				handleOpenReminderDialog={props.handleOpenReminderDialog}
				openFreqDialog={props.openFreqDialog}
				openReminderDialog={props.openReminderDialog}
				closeFreqDialog={props.closeFreqDialog}
				closeReminderDialog={props.closeReminderDialog}
				timeSubmit={props.timeSubmit}
				handleUpdateForm={props.handleUpdateForm}
				handleUpdatedSubmitForm={props.handleUpdatedSubmitForm}
			/>
		</>
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

export default HabitEditor;

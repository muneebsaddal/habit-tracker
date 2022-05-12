import Modal from "react-modal";
import HabitEditorHeader from "./habitEditorComponents/HabitEditorHeader";
import EditHabitForm from "../../forms/editHabitForm/EditHabitForm"
import HabitEditorReminder from "./habitEditorComponents/HabitEditorReminder";
import HabitEditorNotes from "./habitEditorComponents/HabitEditorNotes";
import HabitEditorOverview from "./habitEditorComponents/HabitEditorOverview";
import HabitEditorScore from "./habitEditorComponents/HabitEditorScore";
import HabitEditorHistory from "./habitEditorComponents/HabitEditorHistory";
import HabitEditorCalender from "./habitEditorComponents/HabitEditorCalender";
import HabitEditorStreaks from "./habitEditorComponents/HabitEditorStreaks";

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

					handleHabitEditorClose={props.handleHabitEditorClose}
					
					handleEditHabitForm={props.handleEditHabitForm}
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
				habit={props.habit}
				isOpen={props.editHabitFormOpen}
				closeEditForm={props.handleEditHabitForm}
				handleUpdateFormSubmit={props.handleUpdateFormSubmit}
				handleOpenFreqDialog={props.handleOpenFreqDialog}
				openFreqDialog={props.openFreqDialog}
				closeFreqDialog={props.closeFreqDialog}
				handleOpenReminderDialog={props.handleOpenReminderDialog}
				openReminderDialog={props.openReminderDialog}
				closeReminderDialog={props.closeReminderDialog}
			/>
		</>
	);
};

const modalStyles = {
	content: {
		background: "#f1f1f1",
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

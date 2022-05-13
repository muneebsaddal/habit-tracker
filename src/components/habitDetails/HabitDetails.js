import Modal from "react-modal";
import HabitHeader from "./habitComponents/HabitHeader";
import EditHabitForm from "../../forms/editHabitForm/EditHabitForm";
import HabitReminder from "./habitComponents/HabitReminder";
import HabitNotes from "./habitComponents/HabitNotes";
import HabitOverview from "./habitComponents/HabitOverview";
import HabitScore from "./habitComponents/HabitScore";
import HabitHistory from "./habitComponents/HabitHistory";
import HabitCalender from "./habitComponents/HabitCalender";
import HabitStreaks from "./habitComponents/HabitStreaks";

const HabitDetails = (props) => {
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
				<HabitHeader
					habitName={props.habit.name}
					habitEditorClose={props.habitEditorClose}
					handleHabitEditorClose={props.handleHabitEditorClose}
					handleEditHabitForm={props.handleEditHabitForm}
				/>
				<HabitReminder
					question={props.habit.question}
					frequency={props.habit.frequency}
					reminder={props.habit.reminder}
				/>
				{props.habit.notes && <HabitNotes notes={props.habit.notes} />}
				<HabitOverview
					color={props.habit.color}
					habitCheckList={habitCheckList}
					getDaysInMonth={daysInMonth}
				/>
				<HabitScore
					name={props.habit.name}
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitHistory
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitCalender
					habitCheckList={habitCheckList}
					getPrevDate={props.getPrevDate}
				/>
				<HabitStreaks
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
		background: "rgb(245 245 250)",
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

export default HabitDetails;

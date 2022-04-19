import Modal from "react-modal";
import HabitEditorHeader from "./habitEditorComponents/HabitEditorHeader";
import HabitEditorReminder from "./habitEditorComponents/HabitEditorReminder";
import HabitEditorNotes from "./habitEditorComponents/HabitEditorNotes";
import HabitEditorOverview from "./habitEditorComponents/HabitEditorOverview";
import HabitEditorScore from "./habitEditorComponents/HabitEditorScore";
import HabitEditorHistory from "./habitEditorComponents/HabitEditorHistory";
import HabitEditorCalender from "./habitEditorComponents/HabitEditorCalender";
import HabitEditorStreaks from "./habitEditorComponents/HabitEditorStreaks";
import HabitEditorFrequency from "./habitEditorComponents/HabitEditorFrequency";

const HabitEditor = (props) => {
	return (
		<Modal
			isOpen={props.habitEditorState}
			style={modalStyles}
			ariaHideApp={false}
		>
			<HabitEditorHeader
				habitName={props.habit.name}
				habitEditorClose={props.habitEditorClose}
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
				name={props.habit.name}
				color={props.habit.color}
				getCheckedList={props.getCheckedList}
			/>
			<HabitEditorScore
				name={props.habit.name}
				getPrevDate={props.getPrevDate}
				getCheckedList={props.getCheckedList}
			/>
			<HabitEditorHistory />
			<HabitEditorCalender />
			<HabitEditorStreaks />
			<HabitEditorFrequency />
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

export default HabitEditor;

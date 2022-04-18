import styled from "styled-components";
import Modal from "react-modal";
import HabitEditorHeader from "./habitEditorComponents/HabitEditorHeader";
import HabitEditorReminder from "./habitEditorComponents/HabitEditorReminder";

const HabitEditor = (props) => {
	return (
		<Modal
			isOpen={props.habitEditorState}
			// onRequestClose={props.habitEditorClose}
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

import styled from "styled-components";

const HabitEditorNotes = ({ notes }) => {
	return <Notes>{notes}</Notes>;
};

const Notes = styled.p`
	border: 1px solid #ccc;
	margin: 0px 5px;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default HabitEditorNotes;

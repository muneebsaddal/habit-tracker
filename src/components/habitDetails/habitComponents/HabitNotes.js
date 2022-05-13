import styled from "styled-components";

const HabitNotes = ({ notes }) => {
	return <Notes>{notes}</Notes>;
};

const Notes = styled.p`
	border: 1px solid #ccc;
	margin: auto;
	background: white;
	width: 70%;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default HabitNotes;

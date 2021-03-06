import styled from "styled-components";
import { FaBell, FaCalendarAlt } from "react-icons/fa";

const HabitReminder = ({ question, frequency, reminder }) => {
	return (
		<ReminderContainer>
			{question && <Question>{question}</Question>}
			<Reminder>
				<FaCalendarAlt />
				<ReminderFrequency>
					{frequency === "" ? "Everyday" : frequency}
				</ReminderFrequency>
				<FaBell />
				<ReminderTime>
					{reminder === "" ? "off" : reminder}
				</ReminderTime>
			</Reminder>
		</ReminderContainer>
	);
};

const ReminderContainer = styled.div`
	padding: 20px 100px;
	display: flex;
	margin: auto;
	width: 70%;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	background: rgb(245 245 250);
`;

const Question = styled.h1`
	margin: 0px;
	font-size: 18px;
	padding-bottom: 10px;
`;

const Reminder = styled.div`
	display: flex;
	gap: 10px;
	padding-left: 15px;
`;

const ReminderFrequency = styled.p`
	margin: 0px 30px 0px 0px;
`;

const ReminderTime = styled.p`
	margin: 0px;
`;

export default HabitReminder;

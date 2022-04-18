import styled from "styled-components";

const HabitEditorReminder = ({ question, frequency, reminder }) => {
	return (
		<ReminderContainer>
			{question && <Question>{question}</Question>}
			<Reminder>
				<ReminderFrequency>
					{frequency === "" ? "Everyday" : frequency}
				</ReminderFrequency>
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
	flex-direction: column;
	align-items: left;
	justify-content: center;
	background: #f1f1f1;
`;

const Question = styled.h1`
	margin: 0px;
	font-size: 18px;
    padding-bottom: 10px;
`;

const Reminder = styled.div`
    display: flex;
    gap: 30px;
`;

const ReminderFrequency = styled.p`
	margin: 0px;
`;

const ReminderTime = styled.p`
	margin: 0px;
`;

export default HabitEditorReminder;

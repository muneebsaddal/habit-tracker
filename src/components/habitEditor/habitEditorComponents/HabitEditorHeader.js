import styled from "styled-components";

const HabitEditorHeader = (props) => {
	return (
		<Header>
			<HeaderLeftSideContainer>
				<BackButton onClick={props.habitEditorClose} type="button">
					back
				</BackButton>
				<Title>{props.habitName}</Title>
			</HeaderLeftSideContainer>
			<HeaderRightSideContainer>
				<EditButton type="button">Edit</EditButton>
				<MoreSettingsButton type="button">Settings</MoreSettingsButton>
			</HeaderRightSideContainer>
		</Header>
	);
};

const Header = styled.header`
	background: #4249ff;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	padding: 20px 30px;
`;

const Button = styled.button`
	background: none;
	border: none;
	color: white;
	font-family: "Karla";
	font-size: 18px;
	padding: 0px;
	cursor: pointer;
`;

const HeaderLeftSideContainer = styled.div`
	display: flex;
	gap: 30px;
`;

const BackButton = styled(Button)`
	border: 1px solid #ddd;
	border-radius: 5px;
	width: 60px;
`;

const Title = styled.h1`
	font-family: "Karla";
	font-weight: 500;
	font-size: 32px;
	margin: 0px;
`;

const HeaderRightSideContainer = styled.div`
	display: flex;
	gap: 30px;
`;

const EditButton = styled(Button)``;

const MoreSettingsButton = styled(Button)``;

export default HabitEditorHeader;

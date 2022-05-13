import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineMoreVert } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
const HabitHeader = (props) => {
	return (
		<Header>
			<HeaderLeftSideContainer>
				<BackButton
					onClick={props.handleHabitEditorClose}
					type="button"
				>
					<BiArrowBack size={24} />
				</BackButton>
				<Title>{props.habitName}</Title>
			</HeaderLeftSideContainer>
			<HeaderRightSideContainer>
				<EditButton onClick={props.handleEditHabitForm} type="button">
					<FiEdit3 size={24} />
				</EditButton>
				<MoreSettingsButton type="button">
					<MdOutlineMoreVert size={30} />
				</MoreSettingsButton>
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
	padding: 0px;
	margin: 0px;
	cursor: pointer;
`;

const HeaderLeftSideContainer = styled.div`
	display: flex;
	gap: 30px;
`;

const BackButton = styled(Button)`
	margin-left: 20px;
`;

const Title = styled.h1`
	font-family: "Karla";
	font-weight: 500;
	font-size: 28px;
	margin: 0px;
	padding-left: 40px;
	padding-bottom: 5px;
`;

const HeaderRightSideContainer = styled.div`
	display: flex;
	gap: 30px;
`;

const EditButton = styled(Button)``;

const MoreSettingsButton = styled(Button)``;

export default HabitHeader;

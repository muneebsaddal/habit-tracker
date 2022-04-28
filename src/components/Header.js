import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const Header = (props) => {
	return (
		<HeaderContainer>
			<HeaderTitle>{props.pageTitle}</HeaderTitle>
			<HeaderButtonContainer>
				<AddButton onClick={props.handleOpen}>
					<IoMdAdd size={26} />
				</AddButton>
				<FilterButton>
					<BiFilterAlt size={25} />
				</FilterButton>
				<SettingsButton>
					<IoSettingsOutline size={24} />
				</SettingsButton>
			</HeaderButtonContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	background: #4249ff;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px 20px 30px;
`;

const HeaderTitle = styled.h1`
	font-family: "Karla";
	font-weight: 500;
	font-size: px;
	margin: 0px;
`;

const HeaderButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const Button = styled.button`
	margin-left: 20px;
	border: none;
	background: none;
	cursor: pointer;
	font-family: "Karla";
	font-weight: 400;
	font-size: 16px;
	margin-left: 20px;
	padding: 0;
	color: white;
`;

const AddButton = styled(Button)``;
const FilterButton = styled(Button)``;
const SettingsButton = styled(Button)``;

export default Header;

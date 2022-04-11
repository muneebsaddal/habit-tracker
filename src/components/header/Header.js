import styled from "styled-components";

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
	font-size: 32px;
	margin: 0px;
`;

const HeaderButtonContainer = styled.div`
	display: flex;
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

const Header = (props) => {
	return (
		<HeaderContainer>
			<HeaderTitle>{props.pageTitle}</HeaderTitle>
			<HeaderButtonContainer>
				<AddButton onClick={props.handleOpen}>add</AddButton>
				<FilterButton>filter</FilterButton>
				<SettingsButton>setting</SettingsButton>
			</HeaderButtonContainer>
		</HeaderContainer>
	);
};

export default Header;

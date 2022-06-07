import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineMoreVert } from "react-icons/md";

import Search from "../search/Search";

const Header = (props) => {
	return (
		<HeaderContainer>
			<Link to="/" style={{ textDecoration: "none", color: "white" }}>
				<HeaderTitle id="habitTitle">{props.pageTitle}</HeaderTitle>
			</Link>
			<HeaderButtonContainer>
				<AddButton onClick={props.handleOpen} title="add">
					<IoMdAdd size={26} />
				</AddButton>
				<Search
					showSearchField={props.showSearchField}
					handleSearchString={props.handleSearchString}
					handleSearchButton={props.handleSearchButton}
				/>
				<SettingsButton>
					<MdOutlineMoreVert size={30} />
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
	padding: 20px 60px 20px 60px;
`;

const HeaderTitle = styled.h1`
	font-family: "Karla";
	font-weight: 500;
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
const SettingsButton = styled(Button)``;

export default Header;

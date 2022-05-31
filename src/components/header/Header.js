import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineMoreVert } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const Header = (props) => {
	return (
		<HeaderContainer>
			<HeaderTitle>{props.pageTitle}</HeaderTitle>
			<HeaderButtonContainer>
				<AddButton onClick={props.handleOpen} title="add">
					<IoMdAdd size={26} />
				</AddButton>
				<SearchButton title="search">
					<Container>
						{props.showSearchField && (
							<Input
								placeholder="Type Habit Name"
								type="text"
								onChange={props.handleSearchString}
							/>
						)}
						<BiSearch
							size={25}
							onClick={props.handleSearchButton}
						/>
					</Container>
				</SearchButton>
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
const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	position: relative;
	padding: 9px 40px 9px 20px;
	width: 300px;
	color: #525252;
	font-size: 16px;
	font-weight: 100;
	letter-spacing: 2px;
	border: none;
	border-radius: 5px;
	outline: none;
	margin-right: 20px;
`;

const AddButton = styled(Button)``;
const SearchButton = styled(Button)``;
const SettingsButton = styled(Button)``;

export default Header;

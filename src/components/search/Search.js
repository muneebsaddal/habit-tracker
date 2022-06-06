import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Search = (props) => {
	return (
		<SearchButton title="search">
			<Container>
				{props.showSearchField && (
					<Input
						placeholder="Type Habit Name"
						type="text"
						name="search"
						id="search"
						onChange={props.handleSearchString}
					/>
				)}
				<BiSearch size={25} onClick={props.handleSearchButton} />
			</Container>
		</SearchButton>
	);
};

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
const SearchButton = styled.button`
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

export default Search;

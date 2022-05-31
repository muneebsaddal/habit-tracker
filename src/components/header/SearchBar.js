import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
	const [showSearchField, setShowSearchField] = useState(false);

	const handleSearchButton = (e) => {
		const searchString = document.getElementById("searchString");
		console.log("searchString");
		setShowSearchField((prevState) => !prevState);
	};

	const handleSearchString = (e) => {
		console.log(e.target.value);
	};

	const handleChange = (e) => {
		console.log(e);
	};

	return (
		<Container class="container">
			{showSearchField && (
				<Input
					placeholder="Type Habit Name"
					type="text"
					onChange={handleSearchString}
				/>
			)}
			<BiSearch size={25} onClick={handleSearchButton} />
			<input onClick={handleChange} />
		</Container>
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
	padding: 10px 40px 10px 20px;
	width: 300px;
	color: #525252;
	font-size: 16px;
	font-weight: 100;
	letter-spacing: 2px;
	border: none;
	border-radius: 5px;
	outline: none;
`;

export default SearchBar;

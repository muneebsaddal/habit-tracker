import styled from "styled-components";

const NameError = () => {
	return <Error id="nameError">Enter name</Error>;
};

const Error = styled.span`
	color: #ff0000;
	margin: auto;
`;
export default NameError;

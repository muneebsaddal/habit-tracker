import styled from "styled-components";

const Header = styled.header`
	background: #4249ff;
	color: white;
	display: flex;
	padding: 20px 30px 20px 30px;
`;

const Title = styled.h1`
	padding-left: 10px;
	font-family: "Karla";
	font-weight: 500;
	font-size: 32px;
	margin: 0px;
`;

function FormHeader({ title }) {
	return (
		<Header>
			<Title>{title}</Title>
		</Header>
	);
}

export default FormHeader;

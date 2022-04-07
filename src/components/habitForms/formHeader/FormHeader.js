import styled from "styled-components";

function FormHeader() {
	const Header = styled.header`
		background: #4249ff;
		color: white;
		display: flex;
		padding: 25px 30px 25px 30px;
	`;

	const Title = styled.h1`
		padding-left: 10px;
		font-family: "Inter";
		font-weight: 500;
		font-size: 32px;
		margin: 0px;
	`;
	return (
		<Header>
			<Title>Create habit</Title>
		</Header>
	);
}

export default FormHeader;

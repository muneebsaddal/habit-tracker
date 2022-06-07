import styled from "styled-components";
// import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

function FormHeader({ title, closeEditForm }) {
	return (
		<Header>
			{/* <Link
				to="/"
				style={{
					textDecoration: "none",
					color: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				onClick={closeEditForm}
			> */}
			<IoArrowBackSharp size={26} style={{ alignSelf: "center" }} />
			{/* </Link> */}
			<Title>{title}</Title>
		</Header>
	);
}

const Header = styled.header`
	background: #4249ff;
	color: white;
	display: flex;
	padding: 20px 30px 20px 30px;
`;

const Title = styled.h1`
	padding-left: 30px;
	font-family: "Karla";
	font-weight: 500;
	font-size: 32px;
	margin: 0px;
`;

export default FormHeader;

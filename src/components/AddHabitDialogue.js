import Modal from "react-modal";
import styled from "styled-components";

const modalStyles = {
	content: {
		position: "absolute",
		top: "50%",
		left: "50%",
		height: "300px",
		width: "70%",
		transform: "translate(-50%, -50%)",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		background: "none",
		border: "none"
	},
};

function AddHabitDialogue(props) {
	return (
		<ModalContainer>
			<Modal
				isOpen={props.open}
				onRequestClose={props.handleClose}
				style={modalStyles}
				ariaHideApp={false}
			>
				<Option onClick={props.openFormA}>
					<Heading>Yes or No</Heading>
					<br />
					<Content>
						e.g. Did you wake up early today? Did you exercise? Did
						you play chess?
					</Content>
				</Option>
				<Option onClick={props.openFormB}>
					<Heading>Measurable</Heading>
					<br />
					<Content>
						e.g. How many miles did you run today? How many pages
						did you read?
					</Content>
				</Option>
			</Modal>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	position: relative;
`;

const Option = styled.button`
	background-color: white;
	box-shadow: 0px 1px 3px black;
	border: none;
	border-radius: 5px;
	text-align: left;
	padding: 20px 20px 5px 20px;
	cursor: pointer;
`;
const Heading = styled.h1`
	margin: 0px;
	font-family: "Inter";
	font-size: 30px;
	font-weight: 500;
	color: #212121;
	letter-spacing: 0.04em;
`;

const Content = styled.p`
	margin: 0px;
	font-family: "Inter";
	font-size: 16px;
	line-height: 50px;
`;

export default AddHabitDialogue;

import "./AddHabitDialogue.css";
import Modal from "react-modal";

function AddHabitDialogue(props) {
	return (
		<div className="modal-container">
			<Modal
				isOpen={props.open}
				onRequestClose={props.handleClose}
				className="modal-1"
				ariaHideApp={false}
			>
				<button onClick={props.openFormA}>
					<span className="modal-heading">Yes or No</span>
					<br/>
					<span className="modal-content">
						e.g. Did you wake up early today? Did you exercise? Did you play chess?
					</span>
				</button>
				<button onClick={props.openFormB}>
				<span className="modal-heading">Measurable</span>
					<br/>
					<span className="modal-content">
					e.g. How many miles did you run today? How many pages did you read?
					</span>
				</button>
			</Modal>
		</div>
	);
}

export default AddHabitDialogue;

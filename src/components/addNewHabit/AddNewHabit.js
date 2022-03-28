import "./addNewHabit.css";
import Modal from "react-modal";

function AddNewHabit(props) {
	return (
		<div className="modal-container">
			<Modal
				isOpen={props.open}
				onRequestClose={props.handleClose}
				className="modal-1"
			>
				<button>
					<span className="modal-heading">Yes or No</span>
					<br/>
					<span className="modal-content">
						e.g. Did you wake up early today?
					</span>
				</button>
				<button>
				<span className="modal-heading">Measurable</span>
					<br/>
					<span className="modal-content">
					e.g. How many miles did you run today?
					</span>
				</button>
			</Modal>
		</div>
	);
}

export default AddNewHabit;

import "./habitForm_A.css";
import Modal from "react-modal";
import FormHeader from "../formHeader/FormHeader";

function HabitForm_A(props) {
	return (
		<div className="form-modal-container">
			<Modal
				isOpen={true}
				onRequestClose={props.handleFormClose}
				className="form-modal"
				ariaHideApp={false}
			>
				<FormHeader handleFormClose={props.handleFormClose} />
				<form>
					<div className="input-group">
						<label>Name</label>
						<input type="text" placeholder="e.g. Exercise" />
					</div>
					<div className="input-group">
						<label>Question</label>
						<input type="text" placeholder="e.g. Did you exercise today?"/>
					</div>
					<div className="input-group">
						<label>Frequency</label>
						<button >Every day</button>
					</div>
					<div className="input-group">
						<label>Reminder</label>
						<button >off</button>
					</div>
					<div className="input-group">
						<label>Notes</label>
						<input type="text" placeholder="(Optional)"/>
					</div>
				</form>
			</Modal>
		</div>
	);
}

export default HabitForm_A;

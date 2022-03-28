import "./formHeader.css"

function FormHeader(props) {

	return (
		<div className="form-header">
			<button className="back-button" onClick={props.handleFormClose}>&#8592;</button>
			<div className="form-header-title">Create habit</div>
			<button className="save-button">SAVE</button>
		</div>
	);
}

export default FormHeader;

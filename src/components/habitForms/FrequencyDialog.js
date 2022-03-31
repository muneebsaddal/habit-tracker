import "./habitForm.css";

function FreqencyDialog(props) {
	return (
		
			<form className="freq-dialog-container">
				<div className="dialog-input-container">
					<input
						type="radio"
						id="everyday"
						name="frequency"
						value="everyday"
						checked={props.formData.frequency === "everyday"}
						onChange={props.handleFormChange}
						className="freq-dialog-radio-input"
					/>
					<span className="radio-button"></span>
					<label htmlFor="everyday">Every day</label>
				</div>
				<div className="dialog-input-container">
					<input
						type="radio"
						id="every__days"
						name="frequency"
						value={
							"every 2 days" ||
							"every" +
								document.getElementById("input2").value +
								"day"
						}
						checked={
							props.handleFormChange.frequency ===
							"every" +
								(document.getElementById("input2") || "2") +
								"day"
						}
						onChange={props.handleFormChange}
						className="freq-dialog-radio-input"
					/>
					<span className="radio-button"></span>
					<label htmlFor="every_days">
						Every{" "}
						<input
							className="freq-dialog-number-input"
							type="number"
							id="input2"
							min="0"
							max="99"
						/>{" "}
						days
					</label>
				</div>
				<div className="dialog-input-container">
					<input
						type="radio"
						id="times_per_week"
						name="radio"
						value=""
						className="freq-dialog-radio-input"
					/>
					<span className="radio-button"></span>
					<label htmlFor="times_per_week">
						<input
							className="freq-dialog-number-input"
							type="number"
							min="0"
							max="99"
						/>{" "}
						times per week
					</label>
				</div>
				<div className="dialog-input-container">
					<input
						type="radio"
						id="times_per_month"
						name="radio"
						value=""
						className="freq-dialog-radio-input"
					/>
					<span className="radio-button"></span>
					<label htmlFor="times_per_month">
						<input
							className="freq-dialog-number-input"
							type="number"
							min="0"
							max="99"
						/>{" "}
						times per month
					</label>
				</div>

				<button className="freq-dialog-submit" type="submit">
					SAVE
				</button>
			</form>
	);
}

export default FreqencyDialog;

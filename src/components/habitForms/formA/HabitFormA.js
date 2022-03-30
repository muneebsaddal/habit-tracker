import React, { useState } from "react";
import "./habitFormA.css";
import Modal from "react-modal";
import FormHeader from "../formHeader/FormHeader";
import Timekeeper from "react-timekeeper";
import SketchExample from "../../SketchPicker";

function HabitForm_A(props) {
	const [time, setTime] = useState("8:59pm");

	return (
		<div className="form-modal-container">
			<Modal
				isOpen={props.openFormA}
				onRequestClose={props.handleFormClose}
				className="form-modal"
				ariaHideApp={false}
			>
				<FormHeader handleFormClose={props.handleFormClose} />
				<form>
					<div className="input-group input-group-name">
						<label>Name</label>
						<input type="text" placeholder="e.g. Exercise" />
						<div
							className="input-group input-group-color"
						>
							<label>Colour</label>
							<SketchExample />
						</div>
					</div>

					<div className="input-group">
						<label>Question</label>
						<input
							type="text"
							placeholder="e.g. Did you exercise today?"
						/>
					</div>
					<div className="input-group">
						<label>Frequency</label>
						<button
							type="button"
							onClick={props.handleOpenFreqDialog}
						>
							Every day
						</button>
						<Modal
							isOpen={props.openFreqDialog}
							onRequestClose={props.closeFreqDialog}
							className="form-frequency-dialog"
							ariaHideApp={false}
						>
							<form className="freq-dialog-container">
								<div className="dialog-input-container">
									<input
										type="radio"
										id="everyday"
										name="radio"
										value=""
										className="freq-dialog-radio-input"
									/>
									<span className="radio-button"></span>
									<label htmlFor="everyday">Every day</label>
								</div>
								<div className="dialog-input-container">
									<input
										type="radio"
										id="every_days"
										name="radio"
										value=""
										className="freq-dialog-radio-input"
									/>
									<span className="radio-button"></span>
									<label htmlFor="every_days">
										Every{" "}
										<input
											className="freq-dialog-number-input"
											type="number"
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

								<button
									className="freq-dialog-submit"
									type="submit"
								>
									SAVE
								</button>
							</form>
						</Modal>
					</div>
					<div className="input-group">
						<label>Reminder</label>
						<button
							type="button"
							onClick={props.handleOpenReminderDialog}
						>
							off
						</button>
						<Modal
							isOpen={props.openReminderDialog}
							onRequestClose={props.closeReminderDialog}
							className="form-reminder-dialog"
							ariaHideApp={false}
						>
							<Timekeeper
								className="form-reminder-dialog"
								onRequestClose={props.closeReminderDialog}
								time={props.getTime}
								onChange={(data) => setTime(data.formatted12)}
								onDoneClick={props.changeTime(time)}
							/>
						</Modal>
					</div>
					<div className="input-group">
						<label>Notes</label>
						<input type="text" placeholder="(Optional)" />
					</div>
				</form>
			</Modal>
		</div>
	);
}

export default HabitForm_A;

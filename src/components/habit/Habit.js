import "./habit.css";
import EdiText from "react-editext";

function Habit(props) {
	console.log(props.habit[0]);
	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress">
					{/* <img src={bullet} alt="bullet" className="bullet-logo"/> */}
				</div>
				<div className="habit-name">
					<EdiText
						type="text"
						showButtonsOnHover
						buttonsAlign="before"
						value={props.habit[0]}
						// onSave={props.handleNameChange}
						submitOnEnter="true"
						submitOnUnfocus="true"
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit[1]}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit[2]}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit[3]}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit[4]}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit[5]}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

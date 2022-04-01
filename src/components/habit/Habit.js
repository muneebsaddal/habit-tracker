import "./habit.css";
import EdiText from "react-editext";

function Habit(props) {
	const habitName = props.habit.slice(9,props.habit.indexOf("color") - 3)

	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress">
				</div>
				<div className="habit-name">
					<EdiText
						type="text"
						showButtonsOnHover
						buttonsAlign="before"
						value={habitName}
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

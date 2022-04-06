import "./habit.css";
import EdiText from "react-editext";

function Habit(props) {
	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress"></div>
				<div className="habit-name">
					<EdiText
						type="text"
						showButtonsOnHover
						buttonsAlign="before"
						value={props.habit.name}
						submitOnEnter="true"
						submitOnUnfocus="true"
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={props.habitCheckedChange}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={props.habitCheckedChange}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={props.habitCheckedChange}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={props.habitCheckedChange}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={props.habitCheckedChange}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

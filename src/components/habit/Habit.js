import "./habit.css";
import EdiText from "react-editext";

function Habit(props) {
	const habitName = props.habit.slice(9,props.habit.indexOf("color") - 3)
	let dateCheck = ""
	const isNumber = /\d/

	const indexOfDate = props.habit.indexOf("date")
	if(isNumber.test(indexOfDate + 6)){
		if(isNumber.test(indexOfDate + 7)){
			dateCheck = props.habit.slice((indexOfDate + 6), indexOfDate + 7)
		} else {
			dateCheck = props.habit.slice(indexOfDate)
		}
	}

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
						defaultChecked={dateCheck}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

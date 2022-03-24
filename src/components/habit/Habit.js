import "./habit.css";

function Habit(props) {
	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress">O</div>
				<div className="habit-name">{props.habit.habitName}</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						checked={props.habit.habitCheckDay1}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						checked={props.habit.habitCheckDay2}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						checked={props.habit.habitCheckDay3}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						checked={props.habit.habitCheckDay4}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						checked={props.habit.habitCheckDay5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

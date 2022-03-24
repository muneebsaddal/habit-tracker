import "./habit.css";

function Habit(props) {
	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress">O</div>
				<div className="habit-name">
				</div>
				<div>
					<input type="checkbox" name="checkbox" />
				</div>
				<div>
					<input type="checkbox" name="checkbox" />
				</div>
				<div>
					<input type="checkbox" name="checkbox" />
				</div>
				<div>
					<input type="checkbox" name="checkbox" />
				</div>
				<div>
					<input type="checkbox" name="checkbox" />
				</div>
			</div>
		</div>
	);
}

export default Habit;

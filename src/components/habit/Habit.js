import "./habit.css";

function Habit(props) {
	console.log(props.habit[0])
	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress">O</div>
				<div className="habit-name">{props.habit[0]}</div>
				<div>
					<input type="checkbox" name="checkbox" defaultChecked={props.habit[1]}/>
				</div>
				<div>
					<input type="checkbox" name="checkbox" defaultChecked={props.habit[2]}/>
				</div>
				<div>
					<input type="checkbox" name="checkbox" defaultChecked={props.habit[3]}/>
				</div>
				<div>
					<input type="checkbox" name="checkbox" defaultChecked={props.habit[4]}/>
				</div>
				<div>
					<input type="checkbox" name="checkbox" defaultChecked={props.habit[5]}/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

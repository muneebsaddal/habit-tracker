import "./addNewHabit.css";

function AddNewHabit() {
	return (
		<div className="new-habit">
			<div className="new-habit-columns">
				<div className="new-habit-progress">O</div>
				<input className="new-habit-name"></input>
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

export default AddNewHabit;

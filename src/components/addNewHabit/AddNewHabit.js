import "./addNewHabit.css";

function AddNewHabit(props) {
	return (
		<div className="new-habit">
			<form className="new-habit-columns" onSubmit={props.handleSubmit}>
				<span>
					<input className="button-6" type="submit" value="Add" />
				</span>
				<input
					type="text"
					name="habitName"
					placeholder="Enter habit"
					className="new-habit-name"
				/>
				<div>
					<input type="checkbox" name="habitCheckDay1" />
				</div>
				<div>
					<input type="checkbox" name="habitCheckDay2" />
				</div>
				<div>
					<input type="checkbox" name="habitCheckDay3" />
				</div>
				<div>
					<input type="checkbox" name="habitCheckDay4" />
				</div>
				<div>
					<input type="checkbox" name="habitCheckDay5" />
				</div>
			</form>
		</div>
	);
}

export default AddNewHabit;

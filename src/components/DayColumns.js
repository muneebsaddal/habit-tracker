function DayColumns({ currentDate }) {
	const styles = {
		display: "grid",
		margin: "15px 10px 15px 10px",
		gridTemplateColumns: "repeat(9, 1fr)",
		gap: "10px",
		padding: "10px",
		textAlign: "center",
		fontFamily: "Karla",
		fontSize: "16px",
		fontWeight: "Bolder",
		color: "#626262",
	};

	const days = {
		1: "Sun",
		2: "Mon",
		3: "Tue",
		4: "Wed",
		5: "Thu",
		6: "Fri",
		7: "Sat",
	};

	return (
		<div className="day-columns" style={styles}>
			<div style={{ gridColumnStart: "5" }}>
				{days[currentDate.getDay()]}
				<br />
				{currentDate.getDate()}
			</div>

			<div>
				{
					days[
						currentDate.getDay() - 1 <= 0
							? currentDate.getDay() - 1 + 7
							: currentDate.getDay() - 1
					]
				}
				<br />
				{currentDate.getDate() - 1 <= 0
					? currentDate.getDate() - 1 + 30
					: currentDate.getDate() - 1}
			</div>

			<div>
				{
					days[
						currentDate.getDay() - 2 <= 0
							? currentDate.getDay() - 2 + 7
							: currentDate.getDay() - 2
					]
				}
				<br />
				{currentDate.getDate() - 2 <= 0
					? currentDate.getDate() - 2 + 30
					: currentDate.getDate() - 2}
			</div>

			<div>
				{
					days[
						currentDate.getDay() - 3 <= 0
							? currentDate.getDay() - 3 + 7
							: currentDate.getDay() - 3
					]
				}
				<br />
				{currentDate.getDate() - 3 <= 0
					? currentDate.getDate() - 3 + 30
					: currentDate.getDate() - 3}
			</div>

			<div>
				{
					days[
						currentDate.getDay() - 4 <= 0
							? currentDate.getDay() - 4 + 7
							: currentDate.getDay() - 4
					]
				}
				<br />
				{currentDate.getDate() - 4 <= 0
					? currentDate.getDate() - 4 + 30
					: currentDate.getDate() - 4}
			</div>
		</div>
	);
}

export default DayColumns;

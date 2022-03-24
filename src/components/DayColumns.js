function DayColumns({ currentDate }) {
	const styles = {
		display: "grid",
		margin: "15px 10px 15px 10px",
		gridTemplateColumns: "repeat(9, 1fr)",
		gap: "10px",
		padding: "10px",
		textAlign: "center",
		fontSize: "16px",
		color: "#626262",
	};

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<div className="day-columns" style={styles}>
			<div style={{ gridColumnStart: "5" }}>
				{days[currentDate.getDay()].slice(0, 3)}
				<br />
				{currentDate.getDate()}
			</div>

			<div>
				{days[
					currentDate.getDay() - 1 < 0
						? currentDate.getDay() - 1 + 7
						: currentDate.getDay() - 1
				].slice(0, 3)}
				<br />
				{currentDate.getDate() - 1 < 0
					? currentDate.getDate() - 1 + 30
					: currentDate.getDate() - 1}
			</div>

			<div>
				{days[
					currentDate.getDay() - 2 < 0
						? currentDate.getDay() - 2 + 7
						: currentDate.getDay() - 2
				].slice(0, 3)}
				<br />
				{currentDate.getDate() - 2 < 0
					? currentDate.getDate() - 2 + 30
					: currentDate.getDate() - 2}
			</div>

			<div>
				{days[
					currentDate.getDay() - 3 < 0
						? currentDate.getDay() - 3 + 7
						: currentDate.getDay() - 3
				].slice(0, 3)}
				<br />
				{currentDate.getDate() - 3 < 0
					? currentDate.getDate() - 3 + 30
					: currentDate.getDate() - 3}
			</div>

			<div>
				{days[
					currentDate.getDay() - 4 < 0
						? currentDate.getDay() - 4 + 7
						: currentDate.getDay() - 4
				].slice(0, 3)}
				<br />
				{currentDate.getDate() - 4 < 0
					? currentDate.getDate() - 4 + 30
					: currentDate.getDate() - 4}
			</div>
		</div>
	);
}

export default DayColumns;

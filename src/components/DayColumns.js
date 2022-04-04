function DayColumns() {
	
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
		0: "Sun",
		1: "Mon",
		2: "Tue",
		3: "Wed",
		4: "Thu",
		5: "Fri",
		6: "Sat",
	};

	const getPrevDate = (prevDays) => {
		return ((d) => new Date(d.setDate(d.getDate() - prevDays)))(new Date());
	};

	return (
		<div className="day-columns" style={styles}>
			<div style={{ gridColumnStart: "5" }}>
				{days[getPrevDate(0).getDay()]}
				<br />
				{getPrevDate(0).getDate()}
			</div>

			<div>
				{days[getPrevDate(1).getDay()]}
				<br />
				{getPrevDate(1).getDate()}
			</div>

			<div>
				{days[getPrevDate(2).getDay()]}
				<br />
				{getPrevDate(2).getDate()}
			</div>

			<div>
				{days[getPrevDate(3).getDay()]}
				<br />
				{getPrevDate(3).getDate()}
			</div>

			<div>
				{days[getPrevDate(4).getDay()]}
				<br />
				{getPrevDate(4).getDate()}
			</div>
		</div>
	);
}

export default DayColumns;

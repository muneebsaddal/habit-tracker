import styled from "styled-components";

const getPrevDate = (prevDays) => {
	let date = new Date();
	date.setDate(date.getDate() - prevDays);
	return date;
};

const DayColumns = () => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<Columns>
			<StartingElement>
				{days[getPrevDate(0).getDay()]}
				<br />
				{getPrevDate(0).getDate()}
			</StartingElement>

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
		</Columns>
	);
};

const Columns = styled.div`
	display: grid;
	margin: auto;
	width: 70%;
	grid-template-columns: repeat(9, 1fr);
	gap: 10px;
	padding: 30px 0px 10px 0px;
	text-align: center;
	font-family: "Karla";
	font-size: 16px;
	font-weight: 700;
	color: #626262;
`;

const StartingElement = styled.div`
	grid-column-start: 5;
`;

export default DayColumns;

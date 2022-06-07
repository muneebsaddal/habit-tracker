import { useState } from "react";
import styled from "styled-components";
import HistoryBarChart from "../../charts/HistoryBarChart";

const getGraphInterval = (type) => {
	return {
		week: 7,
		month: 31,
		quarter: 90,
		year: 365,
		default: 7,
	}[type];
};

const HabitHistory = ({ getPrevDate, habitCheckList }) => {
	const [graphState, setGraphState] = useState(7);
	const handleGraphChange = (e) => {
		setGraphState(getGraphInterval(e.target.value));
	};

	const dataPoints = [];
	let sum = 0;
	let interval = 0;
	for (let i = 10; i >= 0; i--) {
		interval++;
		sum = habitCheckList.find((element) => element === getPrevDate(i))
			? sum + 1
			: sum;
		if (interval === graphState) {
			dataPoints.push({
				name: getPrevDate(i),
				score: sum,
			});
			sum = 0;
			interval = 0;
		}
	}
	return (
		<History>
			<div>
				<Heading>History</Heading>
				<Select defaultValue="day" onChange={handleGraphChange}>
					<Option value="week">Week</Option>
					<Option value="month">Month</Option>
					<Option value="quarter">Quarter</Option>
					<Option value="year">Year</Option>
				</Select>
			</div>
			<section>
				<HistoryBarChart data={dataPoints} />
			</section>
		</History>
	);
};

const History = styled.div`
	border: 1px solid #ccc;
	margin: auto;
	background: white;
	width: 70%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: left;
	div {
		display: flex;
		justify-content: space-between;
	}

	section {
		display: flex;
		justify-content: center;
	}
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
`;

const Select = styled.select`
	font-family: "Karla";
	font-size: 18px;
	color: #4e4e4e;
	border: 1px solid #999;
	border-radius: 5px;
	padding: 5px 0px 8px 5px;
`;

const Option = styled.option``;

export default HabitHistory;

import { useState } from "react";
import styled from "styled-components";
import HistoryBarChart from "./charts/HistoryBarChart";

const HabitEditorHistory = ({ getPrevDate, habitCheckList }) => {
	const [graphState, setGraphState] = useState("week");
	const handleGraphChange = (e) => {
		setGraphState(e.target.value);
	};
	let graphInterval = 7;
	switch (graphState) {
		case "week":
			graphInterval = 7;
			break;
		case "month":
			graphInterval = 31;
			break;
		case "quarter":
			graphInterval = 90;
			break;
		case "year":
			graphInterval = 365;
			break;
		default:
			graphInterval = 7;
	}
	const dataPoints = [];
	let sum = 0;
	let interval = 0;
	for (let i = 10; i >= 0; i--) {
		interval++;
		sum = habitCheckList.find((element) => element === getPrevDate(i))
			? sum + 1
			: sum;
		if (interval === graphInterval) {
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
			<HistoryBarChart data={dataPoints} />
		</History>
	);
};

const History = styled.p`
	border: 1px solid #ccc;
	margin: 0px 5px;
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
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
`;

const Select = styled.select`
	font-family: "Karla";
	font-size: 18px;
	color: #999;
	border: none;
`;

const Option = styled.option``;

export default HabitEditorHistory;

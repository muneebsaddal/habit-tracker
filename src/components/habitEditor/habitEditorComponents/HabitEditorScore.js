import { useState } from "react";
import styled from "styled-components";
import ScoreLineChart from "./charts/ScoreLineChart";

const getGraphInterval = (type) => {
	return {
		day: 1,
		week: 7,
		month: 31,
		quarter: 90,
		year: 365,
		default: 1,
	}[type];
};

const HabitEditorScore = ({ habitCheckList, getPrevDate }) => {
	const [graphState, setGraphState] = useState(1);
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
				score: Math.round((sum / 40) * 100),
			});
			interval = 0;
		}
	}
	return (
		<Score>
			<div>
				<Heading>Score</Heading>
				<Select defaultValue="day" onChange={handleGraphChange}>
					<Option value="day">Day</Option>
					<Option value="week">Week</Option>
					<Option value="month">Month</Option>
					<Option value="quarter">Quarter</Option>
					<Option value="year">Year</Option>
				</Select>
			</div>
			<span>
				<ScoreLineChart data={dataPoints} />
			</span>
		</Score>
	);
};

const Score = styled.div`
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

	span {
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
	color: #999;
	border: none;
`;

const Option = styled.option``;

export default HabitEditorScore;

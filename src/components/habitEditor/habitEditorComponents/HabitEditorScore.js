import styled from "styled-components";
import CanvasJSReact from "../../../canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HabitEditorScore = ({ name, getPrevDate, getCheckedList }) => {
	const habitCheckList = getCheckedList(name);

	const dataPoints = [];
	let sum = 0;
	for (let i = 10; i >= 0; i--) {
		sum = habitCheckList.find((element) => element === getPrevDate(i))
			? sum + 1
			: sum;
		dataPoints.push({
			label: getPrevDate(i),
			y: Math.round((sum / 40) * 100),
		});
	}

	const options = {
		animatedEnabled: false,
		exportEnabled: false,
		theme: "light2",
		title: {
			text: "",
		},
		axisY: {
			suffix: "%",
			interval: 1,
		},
		axisX: {
			labelFontSize: 12,
			interval: 1,
		},
		data: [
			{
				type: "line",
				dataPoints: dataPoints,
			},
		],
	};

	return (
		<Score>
			<Heading>Score</Heading>
			<CanvasJSChart options={options} />
		</Score>
	);
};

const Score = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	margin: 0px 5px;
	padding: 20px;
	display: flex;
	justify-content: center;
	gap: 20px;
	align-items: left;
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
`;

export default HabitEditorScore;

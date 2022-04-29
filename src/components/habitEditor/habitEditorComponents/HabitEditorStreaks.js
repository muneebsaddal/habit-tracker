import styled from "styled-components";

const findLongestConseqSubseq = (arr) => {
	let n = arr.length;
	let S = new Set();
	for (let i = 0; i < n; i++) S.add(arr[i]);
	let ans = 0;
	let lastValueOfStreak = 0;
	for (let i = 0; i < n; i++) {
		if (!S.has(arr[i] - 1)) {
			let j = arr[i];
			while (S.has(j)) j++;
			ans = Math.max(ans, j - arr[i]);
			lastValueOfStreak = j - 1;
		}
	}
	return [ans, lastValueOfStreak];
};

const HabitEditorStreaks = ({ habitCheckList, daysIntoYear }) => {
	habitCheckList.sort(function (a, b) {
		return a.localeCompare(b);
	});
	let streakTestArray = [];
	streakTestArray = habitCheckList.map((x) => {
		return daysIntoYear(new Date(x));
	});

	const streakData = findLongestConseqSubseq(streakTestArray);
	const streakStartDate =
		habitCheckList[
			streakTestArray.indexOf(streakData[1]) - streakData[0] + 1
		];
	const streakEndDate =
		habitCheckList[streakTestArray.indexOf(streakData[1])];
	const streak = streakData[0];

	return (
		<Streaks>
			<Heading>Best Streaks</Heading>
			<Streak>
				<DateRange>{streakStartDate}</DateRange>
				<StreakBar>{streak}</StreakBar>
				<DateRange>{streakEndDate}</DateRange>
			</Streak>
		</Streaks>
	);
};

const Streaks = styled.p`
	border: 1px solid #ccc;
	margin: auto;
	background: white;
	width: 70%;
	padding: 20px;
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px 0px 20px 0px;
`;

const Streak = styled.div`
	display: flex;
`;
const DateRange = styled.p`
	margin: 0px;
	color: #777;
`;
const StreakBar = styled.div`
	width: 100%;
	background: #4249ff;
	text-align: center;
	margin: 0px 10px;
	border-radius: 5px;
`;

export default HabitEditorStreaks;

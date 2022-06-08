import styled from "styled-components";
import Pie from "../../../Pie";

const HabitOverview = ({ color, getDaysInMonth, habitCheckList }) => {
	const totalChecked = habitCheckList.length;
	const latestDate = habitCheckList[0];
	const latestMonth = latestDate
		? latestDate.substring(0, latestDate.indexOf("/"))
		: 1;
	const latestYear = latestDate
		? latestDate.substring(latestDate.lastIndexOf("/") + 1)
		: 1;

	return (
		<Overview>
			<Heading>Overview</Heading>
			<Details>
				<Pie percentage={(totalChecked / 40) * 100} color={color} />
				<div>
					<h4 title="score">
						{Math.round((totalChecked / 40) * 100)}%
					</h4>
					<p>Score</p>
				</div>
				<div>
					<h4 title="month">
						+
						{Math.round(
							(totalChecked /
								getDaysInMonth(latestMonth, latestYear)) *
								100
						)}
						%
					</h4>
					<p>Month</p>
				</div>
				<div>
					<h4 title="year">
						+{Math.round((totalChecked / 365) * 100)}%
					</h4>
					<p>Year</p>
				</div>
				<div>
					<h4 title="total">{totalChecked}</h4>
					<p>Total</p>
				</div>
			</Details>
		</Overview>
	);
};

const Overview = styled.div`
	border: 1px solid #ccc;
	margin: auto;
	background: white;
	width: 70%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
`;

const Details = styled.div`
	div {
		padding-top: 5px;
	}
	p {
		margin: 0px;
		color: #aaa;
	}
	h4 {
		margin: 0px;
	}
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 80%;
`;

export default HabitOverview;

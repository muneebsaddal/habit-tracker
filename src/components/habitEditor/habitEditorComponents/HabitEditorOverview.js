import styled from "styled-components";
import Pie from "../../Pie";

const daysInMonth = (month, year) => {
	return new Date(year, month, 0).getDate();
};

const HabitEditorOverview = ({ name, color, getCheckedList }) => {
	const habitCheckList = getCheckedList(name);
	const totalChecked = habitCheckList.length;
	const latestDate = habitCheckList[0];
	const latestMonth = latestDate.substring(0, latestDate.indexOf("/"));
	const latestYear = latestDate.substring(latestDate.lastIndexOf("/") + 1);

	return (
		<Overview>
			<Heading>Overview</Heading>
			<Details>
				<Pie percentage={(totalChecked / 40) * 100} color={color} />
				<container>
					<p>{Math.round((totalChecked / 40) * 100)}%</p>
					<h4>Score</h4>
				</container>
				<container>
					<p>
						+
						{Math.round(
							(totalChecked /
								daysInMonth(latestMonth, latestYear)) *
								100
						)}
						%
					</p>
					<h4>Month</h4>
				</container>
				<container>
					<p>+{Math.round((totalChecked / 365) * 100)}%</p>
					<h4>Year</h4>
				</container>
				<container>
					<p>{totalChecked}</p>
					<h4>Total</h4>
				</container>
			</Details>
		</Overview>
	);
};

const Overview = styled.p`
	border: 1px solid #ccc;
	margin: 0px 5px;
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
	container {
		padding-top: 5px;
	}
	p {
		margin: 0px;
	}
	h4 {
		margin: 0px;
		color: #aaa;
	}
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 80%;
`;

export default HabitEditorOverview;

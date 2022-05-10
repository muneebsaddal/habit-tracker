import styled from "styled-components";

const HabitEditorFrequency = ({
	getPrevDate,
	habitCheckList,
	getPrevMonth,
}) => {
	const dateArr1D = [];
	const arrayLen = 210;
	const columnLength = 7;
	const rowLength = arrayLen / columnLength;
	let color = "#ddd";
	let colorFlag = "";

	for (let i = 0; i < arrayLen; i++) {
		if (
			habitCheckList.find((dateChecked) => dateChecked === getPrevDate(i))
		) {
			colorFlag = "b";
		}
		dateArr1D.push(
			getPrevDate(i).slice(
				getPrevDate(i).indexOf("/") + 1,
				getPrevDate(i).lastIndexOf("/")
			) + colorFlag
		);
	}

	const dateArr2D = [];
	while (dateArr1D.length) dateArr2D.push(dateArr1D.splice(0, rowLength));

	const createTable = () => {
		let table = [];
		for (let i = 0; i < columnLength; i++) {
			let children = [];
			for (let j = 0; j < rowLength; j++) {
				color = dateArr2D[i][j].at(-1) === "b" ? "#585FFF" : "#ddd";
				children.push(<Td theme={{ main: color }}>{}</Td>);
			}
			table.push(<Tr>{children}</Tr>);
		}
		return table;
	};

	const xAxisLabel = () => {
		let xLabel = [];
		for (let i = 0; i < rowLength; i++) {
			xLabel.push(<Th>{getPrevMonth(i).slice(0, 3)}</Th>);
		}
		return xLabel;
	};

	return (
		<Calender>
			<Heading>Calender</Heading>
			<CalenderTable>
				<tbody>
					{createTable()}
					{xAxisLabel()}
				</tbody>
			</CalenderTable>
		</Calender>
	);
};

const Calender = styled.div`
	border: 1px solid #ccc;
	margin: auto;
	background: white;
	width: 70%;
	padding: 20px;
	padding-bottom: 400px;
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
	padding-bottom: 20px;
`;

const CalenderTable = styled.table`
	table-layout: fixed;
	width: 100%;
	border-collapse: collapse;
`;

const Tr = styled.tr``;

const Td = styled.td`
	border: none;
	min-width: 15px;
	height: 20px;
	color: #444444;
	border-bottom: 1px solid black;
	border-top: 1px solid black;
	${"" /* background: ${(props) => props.theme.main}; */}
`;

const Th = styled.th`
	font-size: 13px;
`;

export default HabitEditorFrequency;

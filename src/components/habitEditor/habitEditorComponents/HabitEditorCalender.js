import styled from "styled-components";

const HabitEditorCalender = ({ habitCheckList, getPrevDate, daysIntoYear }) => {
	// const calenderLength = daysIntoYear(
	// 	new Date(habitCheckList[habitCheckList.length - 1])
	// );
	const dateArr1D = [];
	const arrayLen = 210;
	const rowLength = arrayLen / 7;
	let color = "#ddd";
	let colorFlag = "g";

	for (let i = 0; i < arrayLen; i++) {
		habitCheckList.find((dateChecked) => dateChecked === getPrevDate(i))
			? (colorFlag = "b")
			: (colorFlag = "g");

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
		for (let i = 0; i < 7; i++) {
			let children = [];
			for (let j = 0; j < rowLength; j++) {
				dateArr2D[i][j][dateArr2D[i][j].length - 1] === "b"
					? (color = "#585FFF")
					: (color = "#ddd");
				children.push(
					<Td theme={{ main: color }}>
						{dateArr2D[i][j].replace(/[^0-9]/g, "")}
					</Td>
				);
			}
			table.push(<Tr>{children}</Tr>);
		}
		return table;
	};

	return (
		<Calender>
			<Heading>Calender</Heading>
			<CalenderTable>
				<tbody>{createTable()}</tbody>
			</CalenderTable>
		</Calender>
	);
};

const Calender = styled.div`
	border: 1px solid #ccc;
	margin: 0px 5px;
	padding: 20px;
`;

const Heading = styled.h1`
	font-size: 24px;
	margin: 0px;
	padding-bottom: 20px;
`;

const CalenderTable = styled.table`
	table-layout: auto;
	width: 100%;
	overflow: hidden;
`;

const Tr = styled.tr``;

const Td = styled.td`
	font-size: 18px;
	background: #ddd;
	border: none;
	border-radius: 3px;
	min-width: 15px;
	text-align: center;
	color: #444444;
	background: ${(props) => props.theme.main};
`;

export default HabitEditorCalender;

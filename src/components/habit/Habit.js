import { useEffect, useState } from "react";
import styled from "styled-components";
import Pie from "../../Pie";

const Habit = (props) => {
	HabitName = styled.button`
		margin: 0px;
		height: 100%;
		width: 100%;
		background: none;
		border: none;
		grid-column: span 3;
		text-align: left;
		padding: 0px;
		font-family: "Karla";
		font-weight: 600;
		font-size: 18px;
		color: ${props.habit.color};
	`;

	const [checkedList, setCheckedList] = useState(
		props.getCheckedList(props.habit.name)
	);

	const totalChecked = checkedList.length;

	const habitCheckedClick = (e) => {
		if (e.target.checked === true) {
			setCheckedList([...checkedList, props.getPrevDate(e.target.id)]);
		} else if (e.target.checked === false) {
			const tempState = [...checkedList];
			const checkedDate = props.getPrevDate(e.target.id);
			const filteredCheckList = tempState.filter(
				(arrayEle) => arrayEle !== checkedDate
			);
			setCheckedList(filteredCheckList);
		}
	};

	useEffect(() => {
		localStorage.setItem(
			`checkedList_${props.habit.name}`,
			JSON.stringify(checkedList)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkedList]);

	const checkboxIdList = [0, 1, 2, 3, 4];
	const checkboxStateList = [];
	for (let checkboxId of checkboxIdList) {
		props.getCheckedList(props.habit.name).find(
			// eslint-disable-next-line no-loop-func
			(date) => date === props.getPrevDate(checkboxId)
		)
			? checkboxStateList.push(true)
			: checkboxStateList.push(false);
	}

	return (
		<HabitContainer>
			<Columns>
				<HabitProgress>
					<Pie
						percentage={(totalChecked / 40) * 100}
						color={props.habit.color}
					/>
				</HabitProgress>
				<HabitName onDoubleClick={props.habitEditorOpen} title="habitName">
					{props.habit.name}
				</HabitName>
				<CheckboxContainer>
					<input
						type="checkbox"
						name="checkbox"
						id="0"
						defaultChecked={checkboxStateList[0]}
						onClick={habitCheckedClick}
					/>
				</CheckboxContainer>
				<CheckboxContainer>
					<input
						type="checkbox"
						name="checkbox"
						id="1"
						defaultChecked={checkboxStateList[1]}
						onClick={habitCheckedClick}
					/>
				</CheckboxContainer>
				<CheckboxContainer>
					<input
						type="checkbox"
						name="checkbox"
						id="2"
						defaultChecked={checkboxStateList[2]}
						onClick={habitCheckedClick}
					/>
				</CheckboxContainer>
				<CheckboxContainer>
					<input
						type="checkbox"
						name="checkbox"
						id="3"
						defaultChecked={checkboxStateList[3]}
						onClick={habitCheckedClick}
					/>
				</CheckboxContainer>
				<CheckboxContainer>
					<input
						type="checkbox"
						name="checkbox"
						id="4"
						defaultChecked={checkboxStateList[4]}
						onClick={habitCheckedClick}
					/>
				</CheckboxContainer>
			</Columns>
		</HabitContainer>
	);
};

const HabitContainer = styled.li`
	background: white;
	width: 70%;
	margin: 15px auto;
	border-radius: 5px;
	list-style-type: none;
`;

const Columns = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	text-align: center;
	align-items: center;
	height: 60px;
`;

let HabitName = styled.button``;

const HabitProgress = styled.div``;

const CheckboxContainer = styled.div``;

export default Habit;

export { HabitName };

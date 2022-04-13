import { useEffect, useState } from "react";
import styled from "styled-components";
// CODE REVIEW COMMENT: should reuse 1 getPrevDate in days columns
const getPrevDate = (prevDays) => {
	let date = new Date();
	date.setDate(date.getDate() - prevDays);
	return date.toLocaleDateString();
};
// CODE REVIEW COMMENT: why underscore with _name?
const getCheckedList = (_name) => {
	const listData = localStorage.getItem(`checkedList_${_name}`);
	if (!listData) {
		return [];
	}
	return JSON.parse(listData);
};

const Habit = (props) => {
	const [checkedList, setCheckedList] = useState(
		getCheckedList(props.habit.name)
	);

	const habitCheckedClick = (e) => {
		if (e.target.checked === true) {
			setCheckedList([
				...checkedList,
				{
					date: getPrevDate(e.target.id),
				},
			]);
		} else if (e.target.checked === false) {
			// CODE REVIEW COMMENT: we can use consts here. Always better to use consts when
			// we are not reassigning
			let tempState = [...checkedList];
			let checkedDate = getPrevDate(e.target.id);
			let filteredCheckList = tempState.filter(
				(arrayEle) => arrayEle.date !== checkedDate
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
	// CODE REVIEW COMMENT: use let instead of var
	for (var checkboxId of checkboxIdList) {
		getCheckedList(props.habit.name).find(
			({ date }) => date === getPrevDate(checkboxId)
		)
			? checkboxStateList.push(true)
			: checkboxStateList.push(false);
	}

	return (
		<HabitContainer>
			<Columns>
				<HabitProgress></HabitProgress>
				<HabitName>{props.habit.name}</HabitName>
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

const HabitContainer = styled.div`
	padding: 10px;
	background: white;
	margin: 0 10px 10px 10px;
	border-radius: 3px;
`;

const Columns = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	gap: 10px;
	text-align: center;
	align-items: center;
	height: 40px;
`;

const HabitProgress = styled.div``;

const HabitName = styled.p`
	margin: 0px;
	grid-column: span 3;
	text-align: left;
	padding-left: 10px;
	font-weight: 500;
	font-size: 16px;
`;

const CheckboxContainer = styled.div``;

export default Habit;

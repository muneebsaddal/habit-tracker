import "./habit.css";
import { useEffect, useState } from "react";

const getPrevDate = (prevDays) => {
	let date = new Date();
	date.setDate(date.getDate() - prevDays);
	return date.toLocaleDateString();
};

const getCheckedList = (_name) => {
	const listData = localStorage.getItem(`checkedList_${_name}`);
	if (!listData) {
		return [];
	}
	return JSON.parse(listData);
};

function Habit(props) {
	const [checkedList, setCheckedList] = useState(
		getCheckedList(props.habit.name)
	);

	const habitCheckedClick = (e) => {
		console.log(e);
		if (e.target.checked === true) {
			setCheckedList([
				...checkedList,
				{
					date: getPrevDate(e.target.id),
				},
			]);
		} else if (e.target.checked === false) {
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
	}, [checkedList]);

	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress"></div>
				<div className="habit-name">{props.habit.name}</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="0"
						defaultChecked={false}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="1"
						defaultChecked={false}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="2"
						defaultChecked={false}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="3"
						defaultChecked={false}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="4"
						defaultChecked={false}
						onClick={habitCheckedClick}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

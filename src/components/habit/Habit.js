import "./habit.css";
import { useEffect, useState } from "react";

const getPrevDate = (prevDays) => {
	return ((d) => new Date(d.setDate(d.getDate() - prevDays)))(new Date());
};

const getCheckedList = (_id) => {
	const listData = localStorage.getItem(`checkedList_${_id}`);
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
		if (e.target.checked === true) {
			setCheckedList([
				...checkedList,
				{
					id: e.target.id,
					date: getPrevDate(e.target.id),
					checked: true,
				},
			]);
		} else if (e.target.checked === false) {
			let tempState = [...checkedList];
			let filteredCheckList = tempState.filter(
				(arrayEle) => arrayEle.id !== e.target.id
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
						// defaultChecked={
						// 	checkedList.length > 0 &&
						// 	checkedList.map((listElement) => {
						// 		console.log(listElement.id)
						// 		return listElement.id !== "0" ? false : true;
						// 	})
						// }
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

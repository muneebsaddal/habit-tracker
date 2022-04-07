import "./habit.css";
import EdiText from "react-editext";
import { useEffect, useState } from "react";

const getCheckedList = (_id) => {
	const listData = localStorage.getItem(`checkedList_${_id}`);
	if (!listData) {
		return [];
	}
	return JSON.parse(listData);
};

function Habit(props) {
	// console.log(props._id);

	const [checkedList, setCheckedList] = useState(getCheckedList(props.habit.name));

	const habitCheckedClick = (e) => {
		if(e.target.checked === true) {
			setCheckedList([...checkedList, {date: props.date, checked: true}])
		} else {
			// remove from localStorage
		}
	};

	useEffect(() => {
		localStorage.setItem(`checkedList_${props.habit.name}`, JSON.stringify(checkedList));
	}, [checkedList]);

	return (
		<div className="habit">
			<div className="habit-columns">
				<div className="habit-progress"></div>
				<div className="habit-name">
					<EdiText
						type="text"
						showButtonsOnHover
						buttonsAlign="before"
						value={props.habit.name}
						submitOnEnter="true"
						submitOnUnfocus="true"
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						defaultChecked={props.habit.dateChecked.checked}
						onClick={habitCheckedClick}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
				<div>
					<input
						type="checkbox"
						name="checkbox"
						// defaultChecked={}
					/>
				</div>
			</div>
		</div>
	);
}

export default Habit;

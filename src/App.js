import React, { useState } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddNewHabit from "./components/addNewHabit/AddNewHabit";

function App() {
	const current = new Date();

	const [habit, setHabit] = useState(getHabit());
	const [addHabit, setAddHabit] = useState(false);

	function onClickAdd() {
		setAddHabit(true);
	}

	function getHabit() {
		return {
			habitName: "",
			habitCheckDay1: false,
			habitCheckDay2: false,
			habitCheckDay3: false,
			habitCheckDay4: false,
			habitCheckDay5: false,
		};
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);

		setHabit({
			habitName: data.get("habitName"),
			habitCheckDay1: data.get("habitCheckDay1") === null ? false : true,
			habitCheckDay2: data.get("habitCheckDay2") === null ? false : true,
			habitCheckDay3: data.get("habitCheckDay3") === null ? false : true,
			habitCheckDay4: data.get("habitCheckDay4") === null ? false : true,
			habitCheckDay5: data.get("habitCheckDay5") === null ? false : true,
		});

		setAddHabit(false);
	};

	return (
		<>
			<Header pageTitle={"Habit"} handleOnClickAdd={onClickAdd} />
			<DayColumns currentDate={current} />
			<Habit habit={habit} />
			{addHabit && <AddNewHabit handleSubmit={handleSubmit} />}
		</>
	);
}

export default App;

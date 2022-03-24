import React, { useState } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddNewHabit from "./components/addNewHabit/AddNewHabit";

function App() {
	const [title, setTitle] = useState("Habits");

	const current = new Date();

	const [habit, setHabit] = useState(getHabit());

	function getHabit() {
		return {
			habitName: "Type Habit Name",
			habitCheck: [false, false, false, false, false],
		};
	}

	const [addHabit, setAddHabit] = useState(false);
	function onClickAdd() {
		setAddHabit(true);
	}
	function

	return (
		<>
			<Header pageTitle={title} handleOnClickAdd={onClickAdd} />
			<DayColumns currentDate={current} />
			<Habit habit={habit} />
			{addHabit && <AddNewHabit />}
		</>
	);
}

export default App;

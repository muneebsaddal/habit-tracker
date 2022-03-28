import React, { useState } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddNewHabit from "./components/addNewHabit/AddNewHabit";

function App() {
	const current = new Date();

	const [addDialogueOpen, setAddDialogueOpen] = useState(false);
	const handleAddDialogueOpen = () => {
		setAddDialogueOpen(true);
	};
	const handleAddDialogueClose = () => {
		setAddDialogueOpen(false);
	};

	const [habit, setHabit] = useState([
		["", false, false, false, false, false],
	]);
	const [addHabit, setAddHabit] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);

		let habitElement = [
			data.get("habitName"),
			data.get("habitCheckDay1") === null ? false : true,
			data.get("habitCheckDay2") === null ? false : true,
			data.get("habitCheckDay3") === null ? false : true,
			data.get("habitCheckDay4") === null ? false : true,
			data.get("habitCheckDay5") === null ? false : true,
		];

		setHabit((prevstate) => [...prevstate, habitElement]);

		setAddHabit(false);
	};
	let i = 0;
	const habits = habit.map((h) => {
		if (i !== 0) {
			return <Habit key={h} habit={h} />;
		}
		i++;
	});

	return (
		<>
			<Header pageTitle={"Habit"} handleOpen={handleAddDialogueOpen} />
			<DayColumns currentDate={current} />
			{habits}
			<AddNewHabit
				open={addDialogueOpen}
				handleClose={handleAddDialogueClose}
			/>
		</>
	);
}

export default App;

import React, { useState } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddHabitDialogue from "./components/AddHabitDialogue/AddHabitDialogue";
import HabitFormA from "./components/habitForms/formA/HabitFormA";
import HabitFormB from "./components/habitForms/formB/HabitFormB";

function App() {
	const current = new Date();

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

	const [addDialogueOpen, setAddDialogueOpen] = useState(false);
	const handleAddDialogueOpen = () => {
		setAddDialogueOpen(true);
	};
	const handleAddDialogueClose = () => {
		setAddDialogueOpen(false);
	};

	const [addFormOpen_A, setAddFormOpen_A] = useState(false);
	const [addFormOpen_B, setAddFormOpen_B] = useState(false);
	const handleAddFormOpen_A = () => {
		setAddFormOpen_A(true);
		handleAddDialogueClose();
		handleAddFormClose_B();
	};
	const handleAddFormOpen_B = () => {
		setAddFormOpen_B(true);
		handleAddDialogueClose();
		handleAddFormClose_A();
	};
	const handleAddFormClose_A = () => {
		setAddFormOpen_A(false);
	};
	const handleAddFormClose_B = () => {
		setAddFormOpen_B(false);
	};

	const [dialogsFormA, setDialogsFormA] = useState({
		freqDialog: false,
		reminderDialog: false,
	});

	const handleFreqDialogOpenA = () => {
		setDialogsFormA({ ...dialogsFormA, freqDialog: true });
	};
	const handleReminderDialogOpenA = () => {
		setDialogsFormA({...dialogsFormA, reminderDialog: true})
	}
	const handleFreqDialogCloseA = () => {
		setDialogsFormA({ ...dialogsFormA, freqDialog: false });
	};
	const handleReminderDialogCloseA = () => {
		setDialogsFormA({...dialogsFormA, reminderDialog: false})
	}

	const [dialogsFormB, setDialogsFormB] = useState({
		freqDialog: false,
		reminderDialog: false,
	});

	const handleFreqDialogOpenB = () => {
		setDialogsFormB({ ...dialogsFormB, freqDialog: true });
	};
	const handleReminderDialogOpenB = () => {
		setDialogsFormB({...dialogsFormB, reminderDialog: true})
	}
	const handleFreqDialogCloseB = () => {
		setDialogsFormB({ ...dialogsFormB, freqDialog: false });
	};
	const handleReminderDialogCloseB = () => {
		setDialogsFormB({...dialogsFormB, reminderDialog: false})
	}

	const [time, setTime] = useState('8:59pm')

	const handleTimeChange = (data) => {
		setTime(data)
	}

	return (
		<>
			<Header pageTitle={"Habit"} handleOpen={handleAddDialogueOpen} />
			<DayColumns currentDate={current} />
			{habits}
			<AddHabitDialogue
				open={addDialogueOpen}
				handleClose={handleAddDialogueClose}
				openFormA={handleAddFormOpen_A}
				openFormB={handleAddFormOpen_B}
			/>
			{addFormOpen_A ? (
				<HabitFormA
					openFormA={addFormOpen_A}
					handleFormClose={handleAddFormClose_A}
					handleOpenFreqDialog={handleFreqDialogOpenA}
					handleOpenReminderDialog={handleReminderDialogOpenA}
					openFreqDialog={dialogsFormA.freqDialog}
					openReminderDialog={dialogsFormA.reminderDialog}
					closeFreqDialog={handleFreqDialogCloseA}
					closeReminderDialog={handleReminderDialogCloseA}
					getTime={time}
					changeTime={handleTimeChange}
				/>
			) : addFormOpen_B ? (
				<HabitFormB
					openFormB={addFormOpen_B}
					handleFormClose={handleAddFormClose_B}
					handleOpenFreqDialog={handleFreqDialogOpenB}
					handleOpenReminderDialog={handleReminderDialogOpenB}
					openFreqDialog={dialogsFormB.freqDialog}
					openReminderDialog={dialogsFormB.reminderDialog}
					closeFreqDialog={handleFreqDialogCloseB}
					closeReminderDialog={handleReminderDialogCloseB}
					getTime={time}
					changeTime={handleTimeChange}
				/>
			) : (
				<></>
			)}
		</>
	);
}

export default App;

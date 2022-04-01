import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddHabitDialogue from "./components/AddHabitDialogue/AddHabitDialogue";
import HabitFormA from "./components/habitForms/formA/HabitFormA";
import HabitFormB from "./components/habitForms/formB/HabitFormB";

let habitCounter = 0;

function App() {
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
		setDialogsFormA({ ...dialogsFormA, reminderDialog: true });
	};
	const handleFreqDialogCloseA = () => {
		setDialogsFormA({ ...dialogsFormA, freqDialog: false });
	};
	const handleReminderDialogCloseA = () => {
		setDialogsFormA({ ...dialogsFormA, reminderDialog: false });
	};

	const [dialogsFormB, setDialogsFormB] = useState({
		freqDialog: false,
		reminderDialog: false,
	});

	const handleFreqDialogOpenB = () => {
		setDialogsFormB({ ...dialogsFormB, freqDialog: true });
	};
	const handleReminderDialogOpenB = () => {
		setDialogsFormB({ ...dialogsFormB, reminderDialog: true });
	};
	const handleFreqDialogCloseB = () => {
		setDialogsFormB({ ...dialogsFormB, freqDialog: false });
	};
	const handleReminderDialogCloseB = () => {
		setDialogsFormB({ ...dialogsFormB, reminderDialog: false });
	};

	const [time, setTime] = useState("0:00am");

	const handleTimeChange = (data) => {
		setTime(data);
	};

	const handleTimeSubmit = (data) => {
		setDataForm((prevData) => {
			return {
				...prevData,
				reminder: data,
			};
		});
	};

	const current = new Date();
	const currentDate = current.getDate();

	const [dataForm, setDataForm] = useState({
		name: "",
		color: "",
		question: "",
		unit: "",
		target: "",
		frequency: "",
		reminder: "",
		notes: "",
		date: currentDate,
	});

	const handleChangeForm = (e) => {
		const { name, value, type, checked } = e.target;
		setDataForm((prevData) => {
			return {
				...prevData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};

	const handleColorChanges = (color) => {
		setDataForm((prevData) => {
			return {
				...prevData,
				color: color,
			};
		});
	};

	const handleFrequencyChange = (freq) => {
		setDataForm((prevData) => {
			return {
				...prevData,
				frequency: freq,
			};
		});
	};

	useEffect(() => {
		localStorage.setItem(
			`habitFormData_${habitCounter}`,
			JSON.stringify(dataForm)
		);
	}, [dataForm]);

	const savedDataElement = localStorage.getItem(
		`habitFormData_${habitCounter}`
	);

	const [habit, setHabit] = useState([]);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		handleAddFormClose_A();
		handleAddFormClose_B();

		habitCounter++
		setHabit((prevState) => [...prevState, savedDataElement]);
	};

	const habits = habit.map((h) => {
		return <Habit key={h} habit={h} />;
	});

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
					colorChange={handleColorChanges}
					timeSubmit={handleTimeSubmit}
					formData={dataForm}
					handleFormChange={handleChangeForm}
					handleFormSubmit={handleSubmitForm}
					freqChange={handleFrequencyChange}
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
					colorChange={handleColorChanges}
					timeSubmit={handleTimeSubmit}
					formData={dataForm}
					handleFormChange={handleChangeForm}
					handleFormSubmit={handleSubmitForm}
					freqChange={handleFrequencyChange}
				/>
			) : (
				<></>
			)}
		</>
	);
}

export default App;

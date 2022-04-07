import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/habit/Habit";
import AddHabitDialogue from "./components/AddHabitDialogue/AddHabitDialogue";
import HabitFormA from "./components/habitForms/formA/HabitFormA";
import HabitFormB from "./components/habitForms/formB/HabitFormB";
import uuid from 'react-uuid'

function getHabitFormData() {
	const storedData = localStorage.getItem("habitFormData");
	if (!storedData)
		return {
			name: "",
			color: "",
			question: "",
			unit: "",
			target: "",
			frequency: "",
			reminder: "",
			notes: "",
			dateChecked: [
				{
					date: "",
					checked: false,
				},
			],
		};
	return JSON.parse(storedData);
}

function getHabitArray() {
	const storedData = localStorage.getItem("habitArrayData");
	if (!storedData) return [];
	return JSON.parse(storedData);
}

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

	const [dataForm, setDataForm] = useState(getHabitFormData);

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
		localStorage.setItem("habitFormData", JSON.stringify(dataForm));
	}, [dataForm]);

	const [habitArray, setHabitArray] = useState(getHabitArray);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		handleAddFormClose_A();
		handleAddFormClose_B();

		setHabitArray((prevState) => [
			...prevState,
			JSON.parse(localStorage.getItem("habitFormData")),
		]);
	};

	useEffect(() => {
		localStorage.setItem("habitArrayData", JSON.stringify(habitArray));
	}, [habitArray]);

	const handleHabitCheckedChange = (e) => {
		let tempState = [...habitArray];
		let tempElement = { ...tempState[0] };
		
		tempElement.dateChecked = {
			date: current,
			checked: e.target.checked,
		};
		tempState[0] = tempElement;
		setHabitArray(tempState);
	};

	console.log(habitArray);

	const habits = habitArray.map((h) => {
		return (
			<Habit
				key={JSON.stringify(h)}
				// _id={uuid()}
				habit={h}
				date={current}
				habitCheckedChange={handleHabitCheckedChange}
			/>
		);
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

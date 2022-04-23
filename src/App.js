import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/Habit";
import AddHabitDialogue from "./components/AddHabitDialogue";
import HabitFormYesNo from "./components/habitForms/HabitFormYesNo";
import HabitFormMeasurable from "./components/habitForms/HabitFormMeasurable";
import HabitEditor from "./components/habitEditor/HabitEditor";

function getHabitArray() {
	const storedData = localStorage.getItem("habitArrayData");
	if (!storedData) return [];
	return JSON.parse(storedData);
}

function App() {
	const [addDialogueOpen, setAddDialogueOpen] = useState(false);
	const handleAddDialogueOpen = () => {
		setAddDialogueOpen((prevState) => !prevState);
	};

	const [addFormOpen_A, setAddFormOpen_A] = useState(false);
	const [addFormOpen_B, setAddFormOpen_B] = useState(false);
	const handleAddFormOpen_A = () => {
		setAddFormOpen_A(true);
		handleAddDialogueOpen();
		handleAddFormClose_B();
	};
	const handleAddFormOpen_B = () => {
		setAddFormOpen_B(true);
		handleAddDialogueOpen();
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

	const getPrevDate = (prevDays) => {
		let date = new Date();
		date.setDate(date.getDate() - prevDays);
		return date.toLocaleDateString();
	};

	const getPrevMonth = (value) => {
		let date = new Date();
		date.setMonth(date.getMonth() - value);
		return date.toLocaleString("default", { month: "long" });
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

	const formInitialState = {
		name: "",
		color: "#03a9f4",
		question: "",
		unit: "",
		target: "",
		frequency: "",
		reminder: "",
		notes: "",
	};

	const [dataForm, setDataForm] = useState(formInitialState);

	const handleChangeForm = (e) => {
		console.log("clicked");
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

	const [tempFreqValue, setTempFreqValue] = useState("");

	const handleTempFreqValue = (e) => {
		setTempFreqValue(e.target.value);
	};

	const handleFrequencyChange = (freq) => {
		setDataForm((prevData) => {
			return {
				...prevData,
				frequency: freq.target.value.replace("_", tempFreqValue),
			};
		});
	};
	const [updateFlag, setUpdateFlag] = useState(false);
	const [updatedFormData, updateFormData] = useState(formInitialState);
	const handleUpdateForm = (e) => {
		console.log("clicked");
		console.log(updatedFormData);
		setUpdateFlag(true);
		const { name, value, type, checked } = e.target;
		updateFormData((prevData) => {
			return {
				...prevData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};
	const handleUpdatedSubmitForm = (e) => {
		e.preventDefault();
		//close form here

		// setHabitArray((prevState) => [...prevState, dataForm]);
		// setDataForm(formInitialState);
	};

	const [habitArray, setHabitArray] = useState(getHabitArray);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		handleAddFormClose_A();
		handleAddFormClose_B();

		setHabitArray((prevState) => [...prevState, dataForm]);
		setDataForm(formInitialState);
	};

	useEffect(() => {
		localStorage.setItem("habitArrayData", JSON.stringify(habitArray));
	}, [habitArray]);

	const [currentHabit, setCurrentHabit] = useState();

	const [openHabitEditor, setOpenHabitEditor] = useState(false);
	const handleHabitEditorOpen = (e) => {
		for (let i in habitArray) {
			if (habitArray[i].name === e.target.textContent) {
				setCurrentHabit(habitArray[i]);
			}
		}
		setOpenHabitEditor((prevState) => !prevState);
	};

	const getCheckedList = (name) => {
		const listData = localStorage.getItem(`checkedList_${name}`);
		if (!listData) {
			return [];
		}
		return JSON.parse(listData);
	};

	const habits = habitArray.map((h) => {
		return (
			<Habit
				key={JSON.stringify(h)}
				habit={h}
				getPrevDate={getPrevDate}
				getCheckedList={getCheckedList}
				habitEditorOpen={handleHabitEditorOpen}
			/>
		);
	});

	return (
		<>
			<Header pageTitle={"Habit"} handleOpen={handleAddDialogueOpen} />
			<DayColumns />
			{habits}
			<AddHabitDialogue
				open={addDialogueOpen}
				handleClose={handleAddDialogueOpen}
				openFormA={handleAddFormOpen_A}
				openFormB={handleAddFormOpen_B}
			/>
			{addFormOpen_A ? (
				<HabitFormYesNo
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
					tempFreqValue={handleTempFreqValue}
				/>
			) : addFormOpen_B ? (
				<HabitFormMeasurable
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
					tempFreqValue={handleTempFreqValue}
				/>
			) : (
				<></>
			)}
			{openHabitEditor && (
				<HabitEditor
					habit={!updateFlag ? currentHabit : updatedFormData}
					getTime={time}
					changeTime={handleTimeChange}
					habitEditorState={openHabitEditor}
					colorChange={handleColorChanges}
					habitEditorClose={handleHabitEditorOpen}
					getCheckedList={getCheckedList}
					getPrevDate={getPrevDate}
					getPrevMonth={getPrevMonth}
					// handleFormChange={handleChangeForm}
					handleUpdateForm={handleUpdateForm}
					// handleFormSubmit={handleSubmitForm}
					handleUpdatedSubmitForm={handleUpdatedSubmitForm}
					freqChange={handleFrequencyChange}
					tempFreqValue={handleTempFreqValue}
				/>
			)}
		</>
	);
}

export default App;

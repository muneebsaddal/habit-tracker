import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DayColumns from "./components/DayColumns";
import Habit from "./components/Habit";
import AddHabitDialogue from "./components/AddHabitDialogue";
import HabitFormYesNo from "./components/habitForms/HabitFormYesNo";
import HabitFormMeasurable from "./components/habitForms/HabitFormMeasurable";
import HabitEditor from "./components/HabitEditor";

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

	const [habitArray, setHabitArray] = useState(getHabitArray);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		handleAddFormClose_A();
		handleAddFormClose_B();

		setHabitArray((prevState) => [...prevState, dataForm]);
		setDataForm(formInitialState);
	};

	useEffect(() => {
		localStorage.setItem("habitArrayData", JSON.stringify(habitArray));
	}, [habitArray]);

	const habits = habitArray.map((h) => {
		return <Habit key={JSON.stringify(h)} habit={h} />;
	});

	const [openHabitEditor, setOpenHabitEditor] = useState(false)
	const handleHabitEditorOpen = () => {
		setOpenHabitEditor(true);
	};
	const handleHabitEditorClose = () => {
		setOpenHabitEditor(false);
	};

	return (
		<>
			<Header pageTitle={"Habit"} handleOpen={handleAddDialogueOpen} />
			<DayColumns />
			{habits}
			<AddHabitDialogue
				open={addDialogueOpen}
				handleClose={handleAddDialogueClose}
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
			{openHabitEditor && <HabitEditor />}
		</>
	);
}

export default App;

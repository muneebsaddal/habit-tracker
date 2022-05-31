import React, { useState, useEffect, createContext } from "react";
import Header from "./components/header/Header";
import HabitListHeader from "./components/header/HabitListHeader";
import Habit from "./components/habit/Habit";
import AddHabitDialogue from "./components/addHabitDialogue/AddHabitDialogue";
import HabitDetails from "./components/habitDetails/HabitDetails";

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

	const [dialogsFormUpdate, setDialogsFormUpdate] = useState({
		freqDialog: false,
		reminderDialog: false,
	});

	const handleFreqDialogOpenUpdate = () => {
		setDialogsFormUpdate({ ...dialogsFormUpdate, freqDialog: true });
	};
	const handleReminderDialogOpenUpdate = () => {
		setDialogsFormUpdate({ ...dialogsFormUpdate, reminderDialog: true });
	};
	const handleFreqDialogCloseUpdate = () => {
		setDialogsFormUpdate({ ...dialogsFormUpdate, freqDialog: false });
	};
	const handleReminderDialogCloseUpdate = () => {
		setDialogsFormUpdate({ ...dialogsFormUpdate, reminderDialog: false });
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

	const [nameFlag, setNameFlag] = useState(false);
	const handleNameFlag = () => {
		setNameFlag(false);
	};

	const handleSubmitForm = (e) => {
		if (dataForm.name === "") {
			e.preventDefault();
			setNameFlag(true);
		} else {
			e.preventDefault();
			setNameFlag(false);
			// handleAddFormClose_A();
			// handleAddFormClose_B();

			setHabitArray((prevState) => [...prevState, dataForm]);
			setDataForm(formInitialState);
		}
	};

	useEffect(() => {
		localStorage.setItem("habitArrayData", JSON.stringify(habitArray));
	}, [habitArray]);

	const [currentHabit, setCurrentHabit] = useState();

	const [openHabitEditor, setOpenHabitEditor] = useState(false);
	const handleHabitEditorOpen = (e) => {
		for (let habit of habitArray) {
			if (habit.name === e.target.textContent) {
				setCurrentHabit(habit);
			}
		}
		setOpenHabitEditor(true);
	};
	const handleHabitEditorClose = () => {
		setOpenHabitEditor(false);
	};

	const getCheckedList = (name) => {
		const listData = localStorage.getItem(`checkedList_${name}`);
		if (!listData) {
			return [];
		}
		return JSON.parse(listData);
	};

	const [updateFlag, setUpdateFlag] = useState(false);
	const [updatedFormData, updateFormData] = useState(formInitialState);

	const [editHabitFormOpen, setEditHabit] = useState(false);
	const handleEditHabitForm = () => {
		setEditHabit((prevState) => !prevState);
	};

	const handleUpdateForm = (e) => {
		setUpdateFlag(true);
		const { name, value, type, checked } = e.target;
		updateFormData((prevData) => {
			return {
				...prevData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};

	const handleUpdateFormSubmit = (record) => {
		const filteredArray = habitArray.filter(
			(element) => element.name !== record.name
		);
		filteredArray.push(record);
		setHabitArray(filteredArray);
		handleEditHabitForm();
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

	const [showSearchField, setShowSearchField] = useState(false);
	const handleSearchButton = () => {
		setShowSearchField((prevState) => !prevState);
	};

	const [searchString, setSearchString] = useState("");
	const handleSearchString = (e) => {
		setSearchString(e.target.value);
	};

	const searchedHabits = habits.filter(
		(h) => h.props.habit.name === searchString
	);

	return (
		<>
			<Header
				pageTitle={"Habit"}
				handleOpen={handleAddDialogueOpen}
				handleSearchString={(e) => handleSearchString(e)}
				showSearchField={showSearchField}
				handleSearchButton={handleSearchButton}
			/>

			<HabitListHeader />
			{!showSearchField ? habits : searchedHabits}
			<AddHabitDialogue
				open={addDialogueOpen}
				handleClose={handleAddDialogueOpen}
			/>
			{/* {addFormOpen_A ? (
				<AddHabitFormModal
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
					nameFlag={nameFlag}
					handleNameFlag={handleNameFlag}
				/>
			) : addFormOpen_B ? (
				<AddHabitFormModal
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
					nameFlag={nameFlag}
					handleNameFlag={handleNameFlag}
				/>
			) : (
				<></>
			)} */}
			{openHabitEditor && (
				<HabitDetails
					habit={!updateFlag ? currentHabit : updatedFormData}
					getCheckedList={getCheckedList}
					habitEditorState={openHabitEditor}
					habitEditorClose={handleHabitEditorOpen}
					handleHabitEditorClose={handleHabitEditorClose}
					handleEditHabitForm={handleEditHabitForm}
					getPrevDate={getPrevDate}
					editHabitFormOpen={editHabitFormOpen}
					handleOpenFreqDialog={handleFreqDialogOpenUpdate}
					handleOpenReminderDialog={handleReminderDialogOpenUpdate}
					openFreqDialog={dialogsFormUpdate.freqDialog}
					openReminderDialog={dialogsFormUpdate.reminderDialog}
					closeFreqDialog={handleFreqDialogCloseUpdate}
					closeReminderDialog={handleReminderDialogCloseUpdate}
					handleUpdateFormSubmit={handleUpdateFormSubmit}
				/>
			)}
		</>
	);
}

export default App;

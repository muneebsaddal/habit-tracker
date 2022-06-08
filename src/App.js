import React, { useState, useEffect } from "react";
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

	// const [addFormOpen_A, setAddFormOpen_A] = useState(false);
	// const [addFormOpen_B, setAddFormOpen_B] = useState(false);
	// const handleAddFormOpen_A = () => {
	// 	setAddFormOpen_A(true);
	// 	handleAddDialogueOpen();
	// 	handleAddFormClose_B();
	// };
	// const handleAddFormOpen_B = () => {
	// 	setAddFormOpen_B(true);
	// 	handleAddDialogueOpen();
	// 	handleAddFormClose_A();
	// };
	// const handleAddFormClose_A = () => {
	// 	setAddFormOpen_A(false);
	// };
	// const handleAddFormClose_B = () => {
	// 	setAddFormOpen_B(false);
	// };

	// const [dialogsFormYesNo, setDialogsFormYesNo] = useState({
	// 	freqDialog: false,
	// 	reminderDialog: false,
	// });

	// const handleFreqDialogOpenA = () => {
	// 	setDialogsFormYesNo({ ...dialogsFormYesNo, freqDialog: true });
	// };
	// const handleReminderDialogOpenA = () => {
	// 	setDialogsFormYesNo({ ...dialogsFormYesNo, reminderDialog: true });
	// };
	// const handleFreqDialogCloseA = () => {
	// 	setDialogsFormYesNo({ ...dialogsFormYesNo, freqDialog: false });
	// };
	// const handleReminderDialogCloseA = () => {
	// 	setDialogsFormYesNo({ ...dialogsFormYesNo, reminderDialog: false });
	// };

	// const [dialogsFormMeasurable, setDialogsFormMeasurable] = useState({
	// 	freqDialog: false,
	// 	reminderDialog: false,
	// });

	// const handleFreqDialogOpenB = () => {
	// 	setDialogsFormMeasurable({ ...dialogsFormMeasurable, freqDialog: true });
	// };
	// const handleReminderDialogOpenB = () => {
	// 	setDialogsFormMeasurable({ ...dialogsFormMeasurable, reminderDialog: true });
	// };
	// const handleFreqDialogCloseB = () => {
	// 	setDialogsFormMeasurable({ ...dialogsFormMeasurable, freqDialog: false });
	// };
	// const handleReminderDialogCloseB = () => {
	// 	setDialogsFormMeasurable({ ...dialogsFormMeasurable, reminderDialog: false });
	// };

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

	// const getPrevMonth = (value) => {
	// 	let date = new Date();
	// 	date.setMonth(date.getMonth() - value);
	// 	return date.toLocaleString("default", { month: "long" });
	// };

	// const [time, setTime] = useState("0:00am");

	// const handleTimeChange = (data) => {
	// 	setTime(data);
	// };

	// const handleTimeSubmit = (data) => {
	// 	setDataForm((prevData) => {
	// 		return {
	// 			...prevData,
	// 			reminder: data,
	// 		};
	// 	});
	// };

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

	// const [dataForm, setDataForm] = useState(formInitialState);

	// const handleChangeForm = (e) => {
	// 	const { name, value, type, checked } = e.target;
	// 	setDataForm((prevData) => {
	// 		return {
	// 			...prevData,
	// 			[name]: type === "checkbox" ? checked : value,
	// 		};
	// 	});
	// };

	// const handleColorChanges = (color) => {
	// 	setDataForm((prevData) => {
	// 		return {
	// 			...prevData,
	// 			color: color,
	// 		};
	// 	});
	// };

	// const [tempFreqValue, setTempFreqValue] = useState("");

	// const handleTempFreqValue = (e) => {
	// 	setTempFreqValue(e.target.value);
	// };

	// const handleFrequencyChange = (freq) => {
	// 	setDataForm((prevData) => {
	// 		return {
	// 			...prevData,
	// 			frequency: freq.target.value.replace("_", tempFreqValue),
	// 		};
	// 	});
	// };

	const [habitArray, setHabitArray] = useState(getHabitArray);

	// const [nameFlag, setNameFlag] = useState(false);
	// const handleNameFlag = () => {
	// 	setNameFlag(false);
	// };

	// const handleSubmitForm = (e) => {
	// 	if (dataForm.name === "") {
	// 		e.preventDefault();
	// 		setNameFlag(true);
	// 	} else {
	// 		e.preventDefault();
	// 		setNameFlag(false);
	// 		// handleAddFormClose_A();
	// 		// handleAddFormClose_B();

	// 		setHabitArray((prevState) => [...prevState, dataForm]);
	// 		setDataForm(formInitialState);
	// 	}
	// };

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
		setSearchString(e.target.value.toString().toLowerCase());
	};

	const searchedHabits = habits.filter(
		(h) =>
			!h.props.habit.name.toString().toLowerCase().indexOf(searchString)
	);

	const handleHabitDelete = (e) => {
		const filteredArray = habitArray.filter(
			(element) => element.name !== e
		);
		setHabitArray(filteredArray);
		localStorage.removeItem(`checkedList_${e}`);
		handleHabitEditorClose();
	};

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
					openFormYesNo={addFormOpen_A}
					handleFormClose={handleAddFormClose_A}
					handleOpenFreqDialog={handleFreqDialogOpenA}
					handleOpenReminderDialog={handleReminderDialogOpenA}
					openFreqDialog={dialogsFormYesNo.freqDialog}
					openReminderDialog={dialogsFormYesNo.reminderDialog}
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
					openFormMeasurable={addFormOpen_B}
					handleFormClose={handleAddFormClose_B}
					handleOpenFreqDialog={handleFreqDialogOpenB}
					handleOpenReminderDialog={handleReminderDialogOpenB}
					openFreqDialog={dialogsFormMeasurable.freqDialog}
					openReminderDialog={dialogsFormMeasurable.reminderDialog}
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
					handleUpdateForm={handleUpdateForm}
					handleUpdateFormSubmit={handleUpdateFormSubmit}
					handleHabitDelete={handleHabitDelete}
				/>
			)}
		</>
	);
}

export default App;

import { useState, createContext, useEffect } from "react";

const FormContext = createContext();

function getHabitArray() {
	const storedData = localStorage.getItem("habitArrayData");
	if (!storedData) return [];
	return JSON.parse(storedData);
}

const FormProvider = (props) => {
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

			setHabitArray((prevState) => [...prevState, dataForm]);
			setDataForm(formInitialState);
			window.location.reload(false);
		}
	};

	useEffect(() => {
		localStorage.setItem("habitArrayData", JSON.stringify(habitArray));
	}, [habitArray]);

	return (
		<FormContext.Provider
			value={{
				handleFreqDialogOpenA,
				handleReminderDialogOpenA,
				dialogsFormA,
				handleFreqDialogCloseA,
				handleReminderDialogCloseA,
				time,
				handleTimeChange,
				handleColorChanges,
				handleTimeSubmit,
				dataForm,
				handleChangeForm,
				handleSubmitForm,
				handleFrequencyChange,
				handleTempFreqValue,
				nameFlag,
				handleNameFlag,
				handleFreqDialogOpenB,
				handleReminderDialogOpenB,
				dialogsFormB,
				handleFreqDialogCloseB,
				handleReminderDialogCloseB,
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};
export { FormContext, FormProvider };

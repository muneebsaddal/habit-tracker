import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import FormYesNoR from "./forms/addHabitForms/addHabitYesNoForm/FormYesNoR";
import FormMeasurableR from "./forms/addHabitForms/addHabitMeasurableForm/FormMeasurableR";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./FormProvider";

ReactDOM.render(
	<FormProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/formYesNo" element={<FormYesNoR />} />
				<Route path="/formMeasurable" element={<FormMeasurableR />} />
			</Routes>
		</BrowserRouter>
	</FormProvider>,
	document.getElementById("root")
);

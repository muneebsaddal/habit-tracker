import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HabitCalender from "./HabitCalender";

const date = new Date();

const getPrevDate = (prevDays) => {
	let date = new Date();
	date.setDate(date.getDate() - prevDays);
	return date.toLocaleDateString();
};

const habitCheckList = ["4/28/2022", "4/27/2022", "4/25/2022", "4/29/2022"];

test("Habit Calender dates test", async () => {
	render(
		<HabitCalender
			habitCheckList={habitCheckList}
			getPrevDate={getPrevDate}
		/>
	);

	const dateElement = screen.getAllByRole("cell");
	expect(dateElement[0].textContent).toBe(date.getDate().toString());
});

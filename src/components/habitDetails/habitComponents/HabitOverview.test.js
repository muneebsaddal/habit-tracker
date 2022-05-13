import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HabitOverview from "./HabitOverview";

const daysInMonth = (month, year) => {
	return new Date(year, month, 0).getDate();
};

const habitCheckList = ["4/28/2022", "4/27/2022", "4/25/2022", "4/29/2022"];
const totalChecked = habitCheckList.length;
const latestDate = habitCheckList[0];
const latestMonth = latestDate
	? latestDate.substring(0, latestDate.indexOf("/"))
	: 1;
const latestYear = latestDate
	? latestDate.substring(latestDate.lastIndexOf("/") + 1)
	: 1;

test("Habit Overview scores test", async () => {
	render(
		<HabitOverview
			color={"#abcdef"}
			getDaysInMonth={daysInMonth}
			habitCheckList={habitCheckList}
		/>
	);

	const scoreElement = screen.getByTitle("score").textContent;
	expect(scoreElement).toBe(Math.round((totalChecked / 40) * 100) + "%");

	const monthElement = screen.getByTitle("month").textContent;
	expect(monthElement).toBe(
		"+" +
			Math.round(
				(totalChecked / daysInMonth(latestMonth, latestYear)) * 100
			) +
			"%"
	);

	const yearElement = screen.getByTitle("year").textContent;
	expect(yearElement).toBe(
		"+" + Math.round((totalChecked / 365) * 100) + "%"
	);

	const totalElement = screen.getByTitle("total").textContent;
	expect(totalElement).toBe(totalChecked.toString());
});

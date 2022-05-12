import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HabitListHeader from "./HabitListHeader";

test("Habit list header date check", async () => {
	const date = new Date();
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const dayString = days[date.getDay()] + date.getDate();
	render(<HabitListHeader />);

	const dateElement = screen.getByTitle("today");
	expect(dateElement.textContent).toBe(dayString);
});

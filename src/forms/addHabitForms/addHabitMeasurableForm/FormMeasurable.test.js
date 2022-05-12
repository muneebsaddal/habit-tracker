import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormMeasurable from "./FormMeasurable";

const habit = {
	color: "#123456",
};

test("Measurable form fields test", () => {
	render(<FormMeasurable formData={habit} changeTime={() => {}} />);

	//test for habit name input field
	userEvent.type(screen.getByPlaceholderText("e.g. Run"), "Run");
	expect(screen.getByPlaceholderText("e.g. Run").value).toBe("Run");

	//test for question input field
	userEvent.type(
		screen.getByPlaceholderText("e.g. How many miles did you run?"),
		"How many miles did you run?"
	);
	expect(
		screen.getByPlaceholderText("e.g. How many miles did you run?").value
	).toBe("How many miles did you run?");

	//test for unit input field
	userEvent.type(screen.getByPlaceholderText("e.g. miles"), "10");
	expect(screen.getByPlaceholderText("e.g. miles").value).toBe("10");

	//test for target input field
	userEvent.type(screen.getByPlaceholderText("e.g. 15"), "15");
	expect(screen.getByPlaceholderText("e.g. 15").value).toBe("15");

	//test for frequency button
	const mockMeasurableClick = jest.fn();
	userEvent.click(
		screen.getByTitle("frequencyButtonMeasurable"),
		mockMeasurableClick()
	);
	expect(mockMeasurableClick).toHaveBeenCalled();

	//test for Reminder button
	const mockReminderClick = jest.fn();
	userEvent.click(
		screen.getByTitle("reminderButtonMeasurable"),
		mockReminderClick()
	);
	expect(mockReminderClick).toHaveBeenCalled();

	//test for notes input field
	userEvent.type(screen.getByPlaceholderText("(Optional)"), "none");
	expect(screen.getByPlaceholderText("(Optional)").value).toBe("none");

	//test for cancel button
	const mockCancelClick = jest.fn();
	userEvent.click(
		screen.getByTitle("measurableFormCancel"),
		mockCancelClick()
	);
	expect(mockCancelClick).toHaveBeenCalled();

	//test for submit button
	const mockSubmitClick = jest.fn();
	userEvent.click(
		screen.getByTitle("measurableFormSubmit"),
		mockSubmitClick()
	);
	expect(mockSubmitClick).toHaveBeenCalled();
});

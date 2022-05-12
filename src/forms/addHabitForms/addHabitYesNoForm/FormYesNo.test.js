import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormYesNo from "./FormYesNo";

const habit = {
	color: "#123456",
};

test("Measurable form fields test", () => {
	render(<FormYesNo formData={habit} changeTime={() => {}} />);

	//test for habit name input field
	userEvent.type(
		screen.getByPlaceholderText("e.g. Exercise"),
		"Wake up Early"
	);
	expect(screen.getByPlaceholderText("e.g. Exercise").value).toBe(
		"Wake up Early"
	);

	//test for question input field
	userEvent.type(
		screen.getByPlaceholderText("e.g. Did you exercise today?"),
		"Did you wake up early today?"
	);
	expect(
		screen.getByPlaceholderText("e.g. Did you exercise today?").value
	).toBe("Did you wake up early today?");

	//test for frequency button
	const mockMeasurableClick = jest.fn();
	userEvent.click(
		screen.getByTitle("frequencyButtonYesNo"),
		mockMeasurableClick()
	);
	expect(mockMeasurableClick).toHaveBeenCalled();

	//test for Reminder button
	const mockReminderClick = jest.fn();
	userEvent.click(
		screen.getByTitle("reminderButtonYesNo"),
		mockReminderClick()
	);
	expect(mockReminderClick).toHaveBeenCalled();

	//test for notes input field
	userEvent.type(screen.getByPlaceholderText("(Optional)"), "none");
	expect(screen.getByPlaceholderText("(Optional)").value).toBe("none");

	//test for cancel button
	const mockCancelClick = jest.fn();
	userEvent.click(screen.getByTitle("YesNoFormCancel"), mockCancelClick());
	expect(mockCancelClick).toHaveBeenCalled();

	//test for submit button
	const mockSubmitClick = jest.fn();
	userEvent.click(screen.getByTitle("YesNoFormSubmit"), mockSubmitClick());
	expect(mockSubmitClick).toHaveBeenCalled();
});

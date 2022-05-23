import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormYesNo from "./FormYesNo";

const habit = {
	color: "#123456",
};

describe("Form fields test", () => {
	test("habit name input field", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		userEvent.type(
			screen.getByPlaceholderText("e.g. Exercise"),
			"Wake up Early"
		);
		expect(screen.getByPlaceholderText("e.g. Exercise").value).toBe(
			"Wake up Early"
		);
	});
	test("question input field", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		userEvent.type(
			screen.getByPlaceholderText("e.g. Did you exercise today?"),
			"Did you wake up early today?"
		);
		expect(
			screen.getByPlaceholderText("e.g. Did you exercise today?").value
		).toBe("Did you wake up early today?");
	});

	test("frequency button", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		const mockMeasurableClick = jest.fn();
		userEvent.click(
			screen.getByTitle("frequencyButtonYesNo"),
			mockMeasurableClick()
		);
		expect(mockMeasurableClick).toHaveBeenCalled();
	});

	test("Reminder button", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		const mockReminderClick = jest.fn();
		userEvent.click(
			screen.getByTitle("reminderButtonYesNo"),
			mockReminderClick()
		);
		expect(mockReminderClick).toHaveBeenCalled();
	});

	test("notes input field", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		userEvent.type(screen.getByPlaceholderText("(Optional)"), "none");
		expect(screen.getByPlaceholderText("(Optional)").value).toBe("none");
	});

	test("cancel button", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		const mockCancelClick = jest.fn();
		userEvent.click(
			screen.getByTitle("YesNoFormCancel"),
			mockCancelClick()
		);
		expect(mockCancelClick).toHaveBeenCalled();
	});

	test("submit button", () => {
		render(<FormYesNo formData={habit} changeTime={() => {}} />);

		const mockSubmitClick = jest.fn();
		userEvent.click(
			screen.getByTitle("YesNoFormSubmit"),
			mockSubmitClick()
		);
		expect(mockSubmitClick).toHaveBeenCalled();
	});
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormMeasurable from "./FormMeasurable";

const habit = {
	color: "#123456",
};

describe("Measurable form fields test", () => {
	test("habit name input field", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		userEvent.type(screen.getByPlaceholderText("e.g. Run"), "Run");
		expect(screen.getByPlaceholderText("e.g. Run").value).toBe("Run");
	});
	test("question input field", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		userEvent.type(
			screen.getByPlaceholderText("e.g. How many miles did you run?"),
			"How many miles did you run?"
		);
		expect(
			screen.getByPlaceholderText("e.g. How many miles did you run?")
				.value
		).toBe("How many miles did you run?");
	});
	test("unit input field", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		userEvent.type(screen.getByPlaceholderText("e.g. miles"), "10");
		expect(screen.getByPlaceholderText("e.g. miles").value).toBe("10");
	});
	test("target input field", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		userEvent.type(screen.getByPlaceholderText("e.g. 15"), "15");
		expect(screen.getByPlaceholderText("e.g. 15").value).toBe("15");
	});
	test("frequency button", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		const mockMeasurableClick = jest.fn();
		userEvent.click(
			screen.getByTitle("frequencyButtonMeasurable"),
			mockMeasurableClick()
		);
		expect(mockMeasurableClick).toHaveBeenCalled();
	});
	test("Reminder button", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		const mockReminderClick = jest.fn();
		userEvent.click(
			screen.getByTitle("reminderButtonMeasurable"),
			mockReminderClick()
		);
		expect(mockReminderClick).toHaveBeenCalled();
	});
	test("notes input field", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		userEvent.type(screen.getByPlaceholderText("(Optional)"), "none");
		expect(screen.getByPlaceholderText("(Optional)").value).toBe("none");
	});
	test("cancel button", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		const mockCancelClick = jest.fn();
		userEvent.click(
			screen.getByTitle("measurableFormCancel"),
			mockCancelClick()
		);
		expect(mockCancelClick).toHaveBeenCalled();
	});
	test("submit button", () => {
		render(<FormMeasurable formData={habit} changeTime={() => {}} />);

		const mockSubmitClick = jest.fn();
		userEvent.click(
			screen.getByTitle("measurableFormSubmit"),
			mockSubmitClick()
		);
		expect(mockSubmitClick).toHaveBeenCalled();
	});
});

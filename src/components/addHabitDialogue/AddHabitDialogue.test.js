import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddHabitDialogue from "./AddHabitDialogue";

it("test button component", async () => {
	const mockCallback = jest.fn();

	render(
		<AddHabitDialogue
			open={true}
			handleClose={mockCallback}
			openFormA={mockCallback}
			openFormB={mockCallback}
		/>
	);

	const buttonElementYesOrNo = screen.getByRole("button", {
		name: /Measurable/i,
	});
	fireEvent.click(buttonElementYesOrNo);
	expect(mockCallback.mock.calls.length).toEqual(1);

	const buttonElementMeasurable = screen.getByRole("button", {
		name: /Measurable/i,
	});
	fireEvent.click(buttonElementMeasurable);
	expect(mockCallback.mock.calls.length).toEqual(2);
});

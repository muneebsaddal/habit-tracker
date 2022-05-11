import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import HabitFormMeasurable from "./HabitFormMeasurable";

const habit = {
	color: "#123456",
};

describe("Form", () => {
	const onSubmit = jest.fn();

	beforeEach(() => {
		onSubmit.mockClear();
	});
	render(<HabitFormMeasurable formData={habit} changeTime={() => {}} />);

	it("measurable form testing", async () => {
		const name = screen.getByPlaceholderText("e.g. Run");
		user.type(name, "run");

		user.click(screen.getAllByRole("button"));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);
		});

		expect(onSubmit).toHaveBeenCalledWith({ name: "run" });
	});
});

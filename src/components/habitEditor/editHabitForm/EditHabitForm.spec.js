import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import EditHabitForm from "./EditHabitForm";

const habit = {
	color: "#123456",
};

// describe("Form", () => {
// 	test("name input field test", () => {
// 		render(<EditHabitForm habit={habit} />);

// 		userEvent.type(screen.getByLabelText("Name"), "Yay!");
// 		expect(screen.getByLabelText("Name").value).toBe("Yay!");
// 	});
// });

describe("Form", () => {
	const onSubmit = jest.fn();

	beforeEach(() => {
		onSubmit.mockClear();
	});
	render(<EditHabitForm habit={habit} />);

	it("final form testing", async () => {
		const name = screen.getAllByPlaceholderText("e.g. Run");
		user.type(name, "run");

		user.click(screen.getAllByRole("button"));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);
		});

		expect(onSubmit).toHaveBeenCalledWith({ name: "run" });
	});
});

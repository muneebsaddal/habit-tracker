import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormHeader from "./FormHeader";

it("render habit name", async () => {
	render(<FormHeader title="habit name" />);
	const headingElement = screen.getByText(/habit name/i);
	expect(headingElement).toBeInTheDocument();
});

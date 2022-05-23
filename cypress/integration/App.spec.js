/* eslint-disable no-undef */
describe("Add new habit", () => {
	it("checks if habit is added after submitting form", () => {
		// Adding new habit
		cy.visit("http://localhost:3000/");
		cy.get("button").get('[title="add"]').click();
		cy.get("h1").get('[title="yesOrNo"]').click();
		cy.get("input#name").type("Wake up early");
		cy.get("button").get('[title="YesNoFormSubmit"]').click();

		// Asserting if new Habit added
		cy.get("button").get('[title="habitName"]').dblclick();
	});
});

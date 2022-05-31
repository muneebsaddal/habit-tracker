/* eslint-disable no-undef */
describe("Search Habit by name", () => {
	it("search a habit and check if result is shown on screen", () => {
		cy.visit("http://localhost:3000/");

		// add habit
		cy.get("button").get('[title="add"]').click();
		cy.get("h1").get('[title="yesOrNo"]').click();
		cy.get("input#name").type("Wake up early");
		cy.get("button").get('[title="YesNoFormSubmit"]').click();

		// add habit
		cy.get("button").get('[title="add"]').click();
		cy.get("h1").get('[title="yesOrNo"]').click();
		cy.get("input#name").type("Exercise");
		cy.get("button").get('[title="YesNoFormSubmit"]').click();

		// search for habit
		cy.get("button").get('[title="search"]').click();
		cy.get("input#search").type("Wake up early");

		// Assert if right search result shown
		cy.get("button").get('[title="habitName"]').contains("Wake up early");
	});
});

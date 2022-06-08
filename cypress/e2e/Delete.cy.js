/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe("Delete Habit", () => {
	it("search a habit and check if the habit data is deleted", () => {
		cy.visit("http://localhost:3000/", {
			headers: { "Accept-Encoding": "gzip, deflate" },
		});

		// add habit
		cy.get("button").get('[title="add"]').click();
		cy.get("h1").get('[title="yesOrNo"]').click();
		cy.get("input#name").type("Wake up early");
		cy.get("button").get('[title="YesNoFormSubmit"]').click();

		// delete habit
		cy.get("button").get('[title="habitName"]').dblclick();
		cy.get("button#fade-button").click();
		cy.get("li").get('[role="menuitem"]').click();

		// Assert the habit is deleted from local storage
		cy.expect(localStorage.getItem(`habitArrayData`)).to.be.null;
		cy.expect(localStorage.getItem(`checkedList_Wake up early`)).to.not
			.exist;
	});
});

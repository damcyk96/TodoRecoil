describe("TODO TEST", () => {
  it("Adding Todo", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get("[data-testid=addTodo]").type("Test Todo");
    cy.get("[data-testid=btnAdd] > path").click();
    cy.get('[data-testid="Test Todo"]').contains("Test Todo");
  }),
    it("Complete/Uncomplete Todo", () => {
      cy.get('[data-testid="done Test Todo"]').click();
      cy.get('[data-testid="Test Todo"]')
        .should("be.visible")
        .should("have.class", "TodoItem-Completed");
    }),
    it("Change value of Todo and check amount of char", () => {
      cy.get('[data-testid="edit Test Todo"]').click();
      cy.get(".TodoModal-Contents-Input").clear().type("123");
      cy.get(".TodoModal > :nth-child(2)").contains("CHAR COUNT: 3");
      cy.get('[data-testid="update"]').click();
      cy.get('[data-testid="123"]').contains("123");
    }),
    it("Delete Todo", () => {
      cy.get('[data-testid="trash 123"]').click();
    });
});

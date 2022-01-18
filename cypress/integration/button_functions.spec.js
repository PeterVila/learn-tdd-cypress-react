/* eslint-disable jest/valid-expect */
describe("Math operations on counter", () => {
  it("Adds to the counter", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="Add"]').click();
    cy.get('[data-testid="counter"]').should((counter) => {
      expect(counter).to.have.length(1);
      expect(counter).to.contain("1");
    })
    cy.get('[data-testid="Add"]').click();
    cy.get('[data-testid="counter"]').should((counter) => {
      expect(counter).to.contain("2");
    });
  })
  it("Subtracts from counter", () => {
    cy.get('[data-testid="Subtract"]').click();
    cy.get('[data-testid="counter"]').should((counter) => {
      expect(counter).to.contain("1") //From 2 to 1
    })
  })
  it("Resets", () => {
    cy.get('[data-testid="Reset"]').click();
    cy.get('[data-testid="counter"]').should((counter) => {
      expect(counter).to.contain("0") //Reset
      expect(counter).to.have.length(1);
    })
  })
})

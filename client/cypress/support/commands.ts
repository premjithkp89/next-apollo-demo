Cypress.Commands.add("clickOutSide", () => {
  return cy.get("body").click(0, 0);
});

declare global {
  namespace Cypress {
    interface Chainable {
      clickOutSide(): Chainable<JQuery<HTMLBodyElement>>;
    }
  }
}

export {};

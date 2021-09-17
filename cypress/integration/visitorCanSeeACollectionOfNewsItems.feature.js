describe("user visits the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to display a title", () => {
    cy.get("h2").should("contain", "News Wire Network");
  });

  it("is expected to display 4 headlines", () => {
    cy.get("#news-index").children().should("have.length", 20);
  });

  it("is expected to display an image", () => {
    cy.get("#news-item").within(() => {
      cy.get("img").should("be.visible");
    });
  });

  it("is expected to display description for each news", () => {
    cy.get("#news-item").within(() => {
      cy.get(".description").should("be.visible");
    });
  });

  it("is expected to have search functionality", () => {
    cy.get("#news-search").should("be.visible");
  });

  it("is expected to direct to a link", () => {
    cy.get("#news-item").should("have.attr", "href");
  });
});

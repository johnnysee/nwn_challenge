describe('Visitor Can See A Collection Of News', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', "**/top-headlines**", "fx:news_index.json")
    cy.visit('/')
    cy.get("[data-cy='news-section']").as('newsSection')
  });
  it('On Page Load', () => {
    cy.get('@newsSection')
      .children()
      .should('have.length', 20)
  });
});
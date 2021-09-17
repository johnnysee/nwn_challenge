describe('user visits the application', () => {
  before(() => {
    cy.visit('/');
  })

  it('is expected to display a title', () => {
    cy.get('h2').should('contain', 'News Wire Network')
  })

  it('is expected to display 4 headlines', () => {
    cy.get('#news-index').children().should('have.length', 20)
  });
})
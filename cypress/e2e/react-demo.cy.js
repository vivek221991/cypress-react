describe('template spec', () => {
  it('Should click Learn React and check text', () => {
    cy.visit('https://react.dev/');
    cy.get('.self-center').eq(3).children().first().click();
    cy.get('.isolate > article > div').children().first().get('.mdx-heading').eq(0).should('have.text', 'Quick Start')
    })
})
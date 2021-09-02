describe('root page', () => {
  it('has an all posts link', () => {
    cy.visit('/')
    cy.findByText(/\ball\b.*\bposts\b/i)
      .should('exist')
      .click()
    cy.findByText(/moving to a blog/i)
  })

  it('has at least 6 articles', () => {
    cy.visit('/')
    cy.findAllByText(/read more/i).should('have.length.of.at.least', 6)
  })
})

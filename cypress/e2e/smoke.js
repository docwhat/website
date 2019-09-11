describe('root page', () => {
  it('has an all posts link', () => {
    cy.visit('/')
      .findByText(/\ball\b.*\bposts\b/i)
      .click()
      .findByText(/moving to a blog/i)
  })

  it('has at least 6 articles', () => {
    cy.visit('/')
      .findAllByText(/read more/i)
      .should('have.length.of.at.least', 6)
  })
})

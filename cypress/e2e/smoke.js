describe('root page', () => {
  it('has an all posts link', () => {
    cy.visit('/')
      .getByText(/\ball\b.*\bposts\b/i)
      .click()
      .getByText(/moving to a blog/i)
  })

  it('has at least 6 articles', () => {
    cy.visit('/')
      .getAllByText(/read more/i)
      .should('have.length.of.at.least', 6)
  })
})

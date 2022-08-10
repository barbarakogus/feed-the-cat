describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Feed your Cat')
    .should('be.visible')
  })
})

describe('buttons', () => {
  it('should find the button - Go to cat profile', () => {
    cy.visit('/')
    cy.contains('Go to Cat Profile').click()
  })
  it('should find the button - Pour me some milk', () => {
    cy.visit('/')
    cy.contains('Pour me some milk, please!').click()
  })
})
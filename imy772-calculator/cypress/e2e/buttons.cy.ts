describe('Buttons', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('/api/routes', { fixture: 'history.json' }).as('catch routes')
    cy.get('[data-cy="input-display"]').as('display')
    cy.get('[data-cy="button-clear"]').as('clearButton')
    cy.get('[data-cy="button-remove"]').as('removeButton')
    for (let i = 0; i < 16; i++) {
      let hexChar = i.toString(16).toUpperCase()
      cy.get(`[data-cy="button-hex-${hexChar}"]`).as(`hexButton${hexChar}`)
    }
    cy.get('[data-cy="button-arithmetic-add"]').as('addButton')
    cy.get('[data-cy="button-arithmetic-subtract"]').as('subtractButton')
    cy.get('[data-cy="button-arithmetic-multiply"]').as('multiplyButton')
    cy.get('[data-cy="button-arithmetic-divide"]').as('divideButton')
    cy.get('[data-cy="button-clear"]').as('clearButton')
    cy.get('[data-cy="button-remove"]').as('removeButton')
    cy.get('[data-cy="button-equals"]').as('equalsButton')
    cy.get('[data-cy=history-field]').as('historyField')
  })
  
  it('should display "0" on load', () => {
    cy.get('@display').should('have.value', '0')
  })
  
  it('should add "1" to the display', () => {
    cy.get('@hexButton1').click()
    cy.get('@display').should('have.value', '1')
  })
  
  it('should add "A" to existing characters in the display', () => {
    cy.get('@hexButtonA').click()
    cy.get('@display').should('have.value', '1A')
  })
  
  it('should add the operator "+" to existing characters in the display', () => {
    cy.get('@addButton').click()
    cy.get('@display').should('have.value', '1A+')
  })
  
  it('should add "F" to existing characters in the display', () => {
    cy.get('@hexButtonF').click()
    cy.get('@display').should('have.value', '1A+F')
  })
  
  it('should add "2" to existing characters in the display', () => {
    cy.get('@hexButton2').click()
    cy.get('@display').should('have.value', '1A+F2')
  })
  
  it ('should remove 2 from the display', () => {
    cy.get('@removeButton').click()
    cy.get('@display').should('have.value', '1A+F')
  })
  
  it('should clear the display', () => {
    cy.get('@clearButton').click()
    cy.get('@display').should('have.value', '0')
  })
  
  it('should calculate 1A+F2 and display 2', () => {
    cy.get('@hexButton1').click()
    cy.get('@addButton').click()
    cy.get('@hexButton1').click()
    cy.get('@equalsButton').click()
    cy.get('@display').should('have.value', '10C')
  })
  
  it('should calculate 1A+F2 and display 1A+F2=10C in the history', () => {
    cy.get('@hexButton1').click()
    cy.get('@addButton').click()
    cy.get('@hexButton1').click()
    cy.get('@equalsButton').click()
    cy.get('@historyField').should('contain.text', '1A+F2=10C')
  })
  
})
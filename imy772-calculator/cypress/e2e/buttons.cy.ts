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
  
  // Basic functionality and Addition
  
  // it('should display "0" on load', () => {
  //   cy.get('@display').should('have.value', '0')
  // })
  //
  // it('should add "1" to the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@display').should('have.value', '1')
  // })
  //
  // it('should add "1A" to the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@display').should('have.value', '1A')
  // })
  //
  // it('should add the operator "1A+" to the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@display').should('have.value', '1A+')
  // })
  //
  // it('should add "1A+F2" to existing characters in the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@display').should('have.value', '1A+F2')
  // })
  //
  // it ('should remove 2 from the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@removeButton').click()
  //   cy.get('@display').should('have.value', '1A+F')
  // })
  //
  // it('should clear the display', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@clearButton').click()
  //   cy.get('@display').should('have.value', '0')
  // })
  //
  // it('should calculate 1A+F2 and display 10C', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', '10C')
  // })
  //
  // it('should calculate 1A+F2 and display 1A+F2=10C in the history', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@historyField').should('contain.text', '1A + F2 = 10C')
  // })
  //
  // // Subtraction
  //
  // it('should calculate F2-A1 and display 51 with correct history', () => {
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@subtractButton').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@hexButton1').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', '51')
  //   cy.get('@historyField').should('contain.text', 'F2 - A1 = 51')
  // })
  //
  // it('should calculate 1A-F2 and display D8 with correct history', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@subtractButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', 'D8')
  //   cy.get('@historyField').should('contain.text', '1A - F2 = D8')
  // })
  //
  // // Multiplication
  //
  // it('should calculate 1A*F2 and display 1894 with correct history', () => {
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@multiplyButton').click()
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', '1894')
  //   cy.get('@historyField').should('contain.text', '1A * F2 = 1894')
  // })
  //
  // // Division
  //
  // it('should calculate F2/2 and display 79 with correct history', () => {
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@divideButton').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', '79')
  //   cy.get('@historyField').should('contain.text', 'F2 / 2 = 79')
  // })
  //
  // it('should calculate F2/A1 and display 1 with correct history', () => {
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@divideButton').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@hexButton1').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', '1')
  //   cy.get('@historyField').should('contain.text', 'F2 / A1 = 1')
  // })
  //
  // // Check clearing after calculation
  //
  // it('should clear the display when typing after calculation', () => {
  //   cy.get('@hexButtonF').click()
  //   cy.get('@hexButton2').click()
  //   cy.get('@addButton').click()
  //   cy.get('@hexButton1').click()
  //   cy.get('@hexButtonA').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@hexButton1').click()
  //   cy.get('@display').should('have.value', '1')
  // })
  //
  // // Check first input being an operator
  //
  // it('should use 0 in first string if and operator is selected first', () => {
  //   cy.get('@addButton').click()
  //   cy.get('@hexButton1').click()
  //   cy.get('@display').should('have.value', '0+1')
  // })
  //
  // it('should calculate with 0 as second string if no hex was entered after operator', () => {
  //   cy.get('@hexButtonF').click()
  //   cy.get('@subtractButton').click()
  //   cy.get('@equalsButton').click()
  //   cy.get('@display').should('have.value', 'F')
  // })
  
  // Check for division by zero
  
  it('should display "Error - Division by zero" when dividing by zero', () => {
    cy.get('@hexButtonF').click()
    cy.get('@hexButton2').click()
    cy.get('@divideButton').click()
    cy.get('@hexButton0').click()
    cy.get('@equalsButton').click()
    cy.get('@display').should('have.value', 'Error - Division by zero')
  })
  
  
})
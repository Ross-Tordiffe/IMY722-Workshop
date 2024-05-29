describe('Visit site', () => {
  it('passes', () => {
    cy.visit('/')
    cy.intercept('/api/routes', { fixture: 'history.json' }).as('catch routes')
  })
})

describe('Calculation', () => {
  beforeEach(() => {
    cy.visit('/')
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
  
  it('should display 0 on load', () => {
    cy.get('@display').should('have.value', '0')
  })
  
  it('should calculate A + 1 and display B', () => {
    cy.get('@hexButtonA').click()
    cy.get('@addButton').click()
    cy.get('@hexButton1').click()
    cy.get('@equalsButton').click()
    cy.get('@display').should('have.value', 'B')
  })
  
  it('should calculate A - 1 and display 9', () => {
      cy.get('@hexButtonA').click()
      cy.get('@subtractButton').click()
      cy.get('@hexButton1').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '9')
  })
  
  it('should calculate A * 2 and display 14', () => {
      cy.get('@hexButtonA').click()
      cy.get('@multiplyButton').click()
      cy.get('@hexButton2').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '14')
  })
  
  it('should calculate A / 2 and display 5', () => {
      cy.get('@hexButtonA').click()
      cy.get('@divideButton').click()
      cy.get('@hexButton2').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '5')
  })
  
  it('should calculate FFF + FFF and display 1FFE', () => {
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@addButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '1FFE')
  })
  
  it('should calculate FFF - FFE and display 1', () => {
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@subtractButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '0')
  })
  
  it('should calculate 223 - FFF and display DDC', () => {
      cy.get('@hexButton2').click()
      cy.get('@hexButton2').click()
      cy.get('@hexButton3').click()
      cy.get('@subtractButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', 'DDC')
  })
  
  it('should calculate FFF * FFF and display FFE001', () => {
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@multiplyButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', 'FFE001')
  })
  
  it('should calculate FFF / FFF and display 1', () => {
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@divideButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@display').should('have.value', '1')
  })
  
  it('should calculate two sums and display them in the history field', () => {
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@addButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@historyField').should('contain', 'FFF + FFF = 1FFE')
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@subtractButton').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@hexButtonF').click()
      cy.get('@equalsButton').click()
      cy.get('@historyField').should('contain', 'FFF - FFF = 0')
  })
})

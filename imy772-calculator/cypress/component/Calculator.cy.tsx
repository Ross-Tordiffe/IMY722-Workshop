import React from 'react'
import Calculator from '../../src/components/Calculator'
import HexKeypad from "../../src/components/HexKeypad";

describe('Calculator', () => {
  beforeEach(() => {
    cy.intercept('/api/routes', { fixture: 'history.json' })
    cy.mount(<Calculator />)
    // mount child components
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
    cy.get('[data-cy=history-field]').as('historyField')
    cy.get('[data-cy="button-clear"]').as('clearButton')
    cy.get('[data-cy="button-remove"]').as('removeButton')
    cy.get('[data-cy="button-equals"]').as('equalsButton')
  })
  
  it('should display the calculator', () => {
    cy.get('@display').should('exist')
    cy.get('@clearButton').should('exist')
    cy.get('@removeButton').should('exist')
    cy.get('@addButton').should('exist')
    cy.get('@subtractButton').should('exist')
    cy.get('@multiplyButton').should('exist')
    cy.get('@divideButton').should('exist')
    cy.get('@historyField').should('exist')
    cy.get('@clearButton').should('exist')
    cy.get('@removeButton').should('exist')
    cy.get('@equalsButton').should('exist')
  })
  
})
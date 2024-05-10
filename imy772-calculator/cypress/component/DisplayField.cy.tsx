import React from "react";
import DisplayField from "../../src/components/DisplayField";

describe('DisplayField', () => {

  beforeEach(() => {
    cy.mount(<DisplayField displayValue={``} />)
    cy.get('[data-cy="input-display"]').as('display')
  })
  
  it('should display a hexadecimal character in the input field when character is added', () => {
    cy.mount(<DisplayField displayValue={`5`} />)
    cy.get('@display').should('have.value', '5')
    cy.mount(<DisplayField displayValue={`AD / 34`} />)
    cy.get('@display').should('have.value', 'AD / 34')
    cy.mount(<DisplayField displayValue={`3`} />)
    cy.get('@display').should('have.value', '3')
  })
})
import React from "react";
import DisplayField from "../../src/components/DisplayField";

describe('DisplayField', () => {

  beforeEach(() => {
    cy.mount(<DisplayField displayValue={`5`} />)
    cy.get('[data-cy="input-display"]').as('display')
  })
  
  it('should display a hexadecimal character in the input field when character is added', () => {
      cy.mount(<DisplayField displayValue={`5`} />)
      cy.get('@display').should('have.value', '5')
  })
})
import React from "react";
import DisplayField from "../../src/components/DisplayField";

describe('DisplayField', () => {
  it('should display a hexadecimal character in the input field when character is added', () => {
    beforeEach(() => {
      cy.mount(<DisplayField display={`5`} />)
      cy.get('[data-cy="input-display"]').as('display')
    })

    it('Should clear the input field', () => {
      cy.mount(<DisplayField display={`5`} />)
      cy.get('@display').contains('5')
    })
  })
})
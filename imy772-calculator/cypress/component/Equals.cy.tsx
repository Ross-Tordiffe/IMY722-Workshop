import React from 'react'
import Equals from '../../src/components/Equals'

describe('Equals', () => {
  beforeEach(() => {
    cy.mount(<Equals calculate={() => {}} />)
    cy.get('[data-cy="button-equals"]').as('equalsButton')
  })

  it('should trigger the calculate function', () => {
    const calculateSpy = cy.spy().as('calculateSpy')
    cy.mount(<Equals calculate={calculateSpy} />)
    cy.get('@equalsButton').click()
    cy.get('@calculateSpy').should('have.been.called')
  })
})
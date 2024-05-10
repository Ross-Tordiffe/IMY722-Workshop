import React from 'react'
import ClearButton from '../../src/components/ClearButton'

describe('Clear button', () => {
  beforeEach(() => {
    cy.mount(<ClearButton setFirstString={() => {}} setOperator={() => {}} setSecondString={() => {}} />)
    cy.get('[data-cy="button-clear"]').as('clearButton')
  })

  it('Should clear the input field', () => {
    const setFirstString = cy.spy().as('setFirstString')
    const setOperator = cy.spy().as('setOperator')
    const setSecondString = cy.spy().as('setSecondString')
    cy.mount(<ClearButton setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />)
    cy.get('@clearButton').click()
    cy.get('@setFirstString').should('have.been.calledWith', '')
    cy.get('@setOperator').should('have.been.calledWith', '')
    cy.get('@setSecondString').should('have.been.calledWith', '')
  })
})
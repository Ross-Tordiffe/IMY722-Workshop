import React from 'react'
import RemoveButton from '../../src/components/RemoveButton'

describe('RemoveButton.cy.tsx', () => {
  beforeEach(() => {
    cy.mount(<RemoveButton firstString={""} operator={""} secondString={""} setFirstString={() => {}} setOperator={() => {}} setSecondString={() => {}} />)
    cy.get('[data-cy="button-remove"]').as('removeButton')
  })
  
  it('should remove a character from the first string if the operator and the second string are empty', () => {
    const setFirstString = cy.spy().as('setFirstString')
    const setOperator = cy.spy().as('setOperator')
    const setSecondString = cy.spy().as('setSecondString')
    cy.mount(<RemoveButton firstString={"AF2"} operator={""} secondString={""} setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />)
    cy.get('@removeButton').click()
    cy.get('@setFirstString').should('have.been.calledWith', 'AF')
    cy.get('@setOperator').should('not.have.been.called')
    cy.get('@setSecondString').should('not.have.been.called')
  })
  
  it('should remove a character from the second string if the operator is set', () => {
    const setFirstString = cy.spy().as('setFirstString')
    const setOperator = cy.spy().as('setOperator')
    const setSecondString = cy.spy().as('setSecondString')
    cy.mount(<RemoveButton firstString={"AF2"} operator={"+"} secondString={""} setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />)
    cy.get('@removeButton').click()
    cy.get('@setFirstString').should('not.have.been.called')
    cy.get('@setOperator').should('have.been.calledWith', '')
    cy.get('@setSecondString').should('not.have.been.called')
  })
  
  it('should remove a character from the second string if the operator is set', () => {
    const setFirstString = cy.spy().as('setFirstString')
    const setOperator = cy.spy().as('setOperator')
    const setSecondString = cy.spy().as('setSecondString')
    cy.mount(<RemoveButton firstString={"AF2"} operator={"+"} secondString={"F1"} setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />)
    cy.get('@removeButton').click()
    cy.get('@setFirstString').should('not.have.been.called')
    cy.get('@setOperator').should('not.have.been.called')
    cy.get('@setSecondString').should('have.been.calledWith', 'F')
  })
})
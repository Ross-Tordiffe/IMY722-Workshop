import ArithmeticButtons from '../../src/components/ArithmeticButtons'

describe('Buttons', () => {
    beforeEach(() => {
        cy.mount(<ArithmeticButtons setOperator={() => {}} />)
        cy.get('[data-cy="button-arithmetic-add"]').as('addButton')
        cy.get('[data-cy="button-arithmetic-subtract"]').as('subtractButton')
        cy.get('[data-cy="button-arithmetic-multiply"]').as('multiplyButton')
        cy.get('[data-cy="button-arithmetic-divide"]').as('divideButton')
    })
    
    it('should set the operator to add (+)', () => {
      const setOperatorSpy = cy.spy().as('setOperatorSpy')
      cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
      cy.get('@addButton').contains("+").click()
      cy.get('@setOperatorSpy').should('have.been.calledWith', '+')
    })

    it('should set the operator to subtract (-)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@subtractButton').contains("-").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '-')
    })

    it('should set the operator to multiply (*)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@multiplyButton').contains("*").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '*')
    })

    it('should set the operator to divide (/)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@divideButton').contains("/").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '/')
    })
    
})
import ArithmeticButtons from '../../src/components/ArithmeticButtons'

describe('Addition button', () => {
    beforeEach(() => {
        cy.mount(<ArithmeticButtons setOperator={() => {}} />)
        cy.get('[data-cy="button-arithmetic-add"]').as('addButton')
    })
    
    it('should set the operator to add (+)', () => {
      const setOperatorSpy = cy.spy().as('setOperatorSpy')
      cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
      cy.get('@addButton').contains("+").click()
      cy.get('@setOperatorSpy').should('have.been.calledWith', '+')
    })
})

describe('Subtraction button', () => {
    beforeEach(() => {
        cy.mount(<ArithmeticButtons setOperator={() => {}} />)
        cy.get('[data-cy="button-arithmetic-subtract"]').as('subtractButton')
    })
    
    it('should set the operator to subtract (-)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@subtractButton').contains("-").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '-')
    })
})

describe('Multiplication button', () => {
    beforeEach(() => {
        cy.mount(<ArithmeticButtons setOperator={() => {}} />)
        cy.get('[data-cy="button-arithmetic-multiply"]').as('multiplyButton')
    })
    
    it('should set the operator to multiply (*)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@multiplyButton').contains("*").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '*')
    })
})

describe('Division button', () => {
    beforeEach(() => {
        cy.mount(<ArithmeticButtons setOperator={() => {}} />)
        cy.get('[data-cy="button-arithmetic-divide"]').as('divideButton')
    })
    
    it('should set the operator to divide (/)', () => {
        const setOperatorSpy = cy.spy().as('setOperatorSpy')
        cy.mount(<ArithmeticButtons setOperator={setOperatorSpy} />)
        cy.get('@divideButton').contains("/").click()
        cy.get('@setOperatorSpy').should('have.been.calledWith', '/')
    })
})
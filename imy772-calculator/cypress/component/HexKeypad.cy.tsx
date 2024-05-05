import HexKeypad from '../../src/components/HexKeypad'

describe('HexKeypad', () => {
  beforeEach(() => {
    cy.mount(<HexKeypad setFirstString={() => {
    }} setSecondString={() => {
    }} operator={''}/>)
    for (let i = 0; i < 16; i++) {
        let hexChar = i.toString(16).toUpperCase()
        cy.get(`[data-cy="button-hex-${hexChar}"]`).as(`hexButton${hexChar}`)
    }
  })
  
  it('should add a hex character to first string if no operator is set', () => {
    const setFirstStringSpy = cy.spy().as('setFirstStringSpy')
    const setSecondStringSpy = cy.spy().as('setSecondStringSpy')
    cy.mount(<HexKeypad setFirstString={setFirstStringSpy} setSecondString={setSecondStringSpy} operator={''}/>)
    cy.get('@hexButtonA').click()
    cy.get('@setSecondStringSpy').should('not.have.been.called')
    cy.get('@setFirstStringSpy').should('have.been.calledWith', 'A')
  })
  
  it('should add a hex character to second string if operator is set', () => {
      const setFirstStringSpy = cy.spy().as('setFirstStringSpy')
      const setSecondStringSpy = cy.spy().as('setSecondStringSpy')
      cy.mount(<HexKeypad setFirstString={setFirstStringSpy} setSecondString={setSecondStringSpy} operator={'+'}/>)
      cy.get('@hexButtonA').click()
      cy.get('@setFirstStringSpy').should('not.have.been.called')
      cy.get('@setSecondStringSpy').should('have.been.calledWith', 'A')
  })
})
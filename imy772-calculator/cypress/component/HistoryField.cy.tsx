import HistoryField from '../../src/components/HistoryField'

describe('HistoryField', () => {
    beforeEach(() => {
        cy.intercept('/api/routes', { fixture: 'history.json' })
        cy.mount(<HistoryField history={[]} setHistory={() => {}} />)
        cy.get('[data-cy=history-field]').as('historyField')
    })

    it('should not display history if there is no history', () => {
        cy.mount(<HistoryField history={[]} setHistory={() => {}} />)
        cy.get('@historyField').children('.history-list').should('have.html', '')
    })
    
    it('should display history', () => {
        cy.mount(<HistoryField history={['4A + 23 = 6D']} setHistory={() => {}} />)
        cy.get('@historyField').should('contain', '4A + 23 = 6D')
    })
    
    it('should display multiple history', () => {
        cy.mount(<HistoryField history={['4A + 23 = 6D', '1 + 1 = 2']} setHistory={() => {}} />)
        cy.get('@historyField').should('contain', '4A + 23 = 6D')
        cy.get('@historyField').should('contain', '1 + 1 = 2')
    })  
    

});

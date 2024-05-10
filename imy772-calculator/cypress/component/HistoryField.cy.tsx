import HistoryField from '../../src/components/HistoryField'

describe('HistoryField', () => {
    beforeEach(() => {
        cy.intercept('/api/routes', { fixture: 'history.json' })
        cy.mount(<HistoryField history={[]} setHistory={() => {}} />)
        cy.get('[data-cy=history-field]').as('historyField')
        
    })
    
    it('should fetch history on mount', () => {
        // get history from fixture

        cy.mount(<HistoryField history={['4A + 23 = 6D']} setHistory={() => {}} />)
        cy.get('@historyField').should('contain', '4A + 23 = 6D')
    })
});

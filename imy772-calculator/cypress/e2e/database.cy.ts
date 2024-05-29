

describe('Visit site', () => {
    it('passes', () => {
        cy.visit('/')
    })
})

describe("API Direct Testing", () => {
    it("should get the history", () => {
        cy.request({
            url: 'api/routes',
            method: 'GET',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("should add an entry to the history which is then retrieved (Testing Post)", () => {
        cy.request({
            url: 'api/routes',
            method: 'POST',
            body: {
                problem: '22 + AA',
                answer: 'CC',
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)

        })

        cy.request({
            url: 'api/routes',
            method: 'GET',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response.body)
            expect(response.body.history[response.body.history.length - 1].problem).to.eq('22 + AA')
        })
    })

    it("should delete the history", () => {
        cy.request({
            url: 'api/routes',
            method: 'DELETE',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

        cy.request({
            url: 'api/routes',
            method: 'GET',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.history.length).to.eq(0)
        })
    })
    
    it("should show an error message for an invalid request", () => {
        cy.request({
            url: 'api/routes',
            method: 'PUT',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405)
            expect(response.body.message).to.eq('Invalid request')
        })
    })
})

describe('Calculator Database', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy="input-display"]').as('display')
        cy.get('[data-cy="button-clear"]').as('clearButton')
        cy.get('[data-cy="button-remove"]').as('removeButton')
        for (let i = 0; i < 16; i++) {
            let hexChar = i.toString(16).toUpperCase()
            cy.get(`[data-cy="button-hex-${hexChar}"]`).as(`hexButton${hexChar}`)
        }
        cy.get('[data-cy="button-arithmetic-add"]').as('addButton')
        cy.get('[data-cy="button-arithmetic-subtract"]').as('subtractButton')
        cy.get('[data-cy="button-arithmetic-multiply"]').as('multiplyButton')
        cy.get('[data-cy="button-arithmetic-divide"]').as('divideButton')
        cy.get('[data-cy="button-clear"]').as('clearButton')
        cy.get('[data-cy="button-remove"]').as('removeButton')
        cy.get('[data-cy="button-equals"]').as('equalsButton')
        cy.get('[data-cy=history-field]').as('historyField')
        cy.get('[data-cy=history-clear]').as('historyClear')
    })
    
    it('should display nothing in the history field after clearing it', () => {
        cy.get('@historyClear').click()
        cy.get('@historyField').children('.history-list').should('have.html', '')
    })

    it('should display 4A + 24 = 6E in the history field after adding 4A and 24', () => {
        cy.get('@hexButton4').click()
        cy.get('@hexButtonA').click()
        cy.get('@addButton').click()
        cy.get('@hexButton2').click()
        cy.get('@hexButton4').click()
        cy.get('@equalsButton').click()
        cy.get('@historyField').should('contain', '4A + 24 = 6E')
    })

    it('should display nothing in the history field after clearing it again', () => {
        cy.get('@historyClear').click()
        cy.get('@historyField').children('.history-list').should('have.html', '')
    })
    
    it('should display 4A + 24 = 6E and 4A - 24 = 26 in the history field', () => {
        cy.get('@hexButton4').click()
        cy.get('@hexButtonA').click()
        cy.get('@addButton').click()
        cy.get('@hexButton2').click()
        cy.get('@hexButton4').click()
        cy.get('@equalsButton').click()
        cy.get('@hexButton4').click()
        cy.get('@hexButtonA').click()
        cy.get('@subtractButton').click()
        cy.get('@hexButton2').click()
        cy.get('@hexButton4').click()
        cy.get('@equalsButton').click()
        cy.get('@historyField').should('contain', '4A + 24 = 6E')
        cy.get('@historyField').should('contain', '4A - 24 = 26')
    })
})



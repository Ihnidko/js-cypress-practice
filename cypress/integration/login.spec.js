/// <reference types="cypress" />

describe ('log in suite', () => {

    beforeEach('open rozetka', () => {
        cy.visit('/')
    })

    it('log in test', ()=>{
        cy.get('.side-menu__toggler > svg').click()
        cy.contains('Войти в').click().should('contain', 'Войти')
    })
})
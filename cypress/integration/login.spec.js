/// <reference types="cypress" />

describe ('log in suite', () => {

    beforeEach('open rozetka', () => {
        cy.visit('/')
    })

    it('log in test', ()=>{
        cy.get('.side-menu__toggler > svg').click()
        cy.contains('Войти в').click().should('contain', 'Войти')
    })

    it.only('side menu test', ()=>{
        cy.get('.side-menu__toggler > svg').click()
        cy.contains('Город').get('.menu-location > rz-city > .button--link').click()
        cy.get('.autocomplete__input').clear().type('Черновцы')
        cy.get('button').should('contain','Применить')
    })

    it('basket test', ()=>{
        cy.get('.js-rz-cart > .header-actions__button-wrapper > .header-actions__button').click()
        cy.contains('Корзина').should('contain', 'Корзина ')
        cy.get('.cart-dummy').parents('.cart').get('.cart-dummy__heading').should('contain','Корзина пуста')
    })
})
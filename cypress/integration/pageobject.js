import {onMainPage} from "../support/page_objects/mainPage.js"

describe('Test with Page Object', ()=>{

    beforeEach('open rozetka', () => {
        cy.visit('/')
    })

    it('verify side menu', ()=>{
       onMainPage.sideMenuPage()
    })
})
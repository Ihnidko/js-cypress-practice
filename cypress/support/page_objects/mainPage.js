function findMenuItem(item){
    // cy.get('li').parent('.menu-main').contains('button').then(()=>{
    //     cy.get('button').click()
    // })
}

export class MainPage{

    sideMenuPage(){
        cy.get('.side-menu__toggler > svg').click()
        findMenuItem('Корзина')
    }
}

 export const onMainPage = new MainPage()

//  <svg height="24" width="24"><use href="#icon-basket"></use></svg>
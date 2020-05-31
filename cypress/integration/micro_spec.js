describe('Testing Micro Route', function() {
it('tests start an adventure route: micro', function() {
    window.cy.visit('http://localhost:3000/#/')
  
    window.cy.contains('Adventure').click()

    window.cy.contains("Micro").click()

    window.cy.url().should('include', 'Micro')
    
    //window.cy.contains("Dive").click()
    window.cy.get('[href*= "/plasticpollution/#/Road"]').click();

    window.cy.url().should('include','Road')

    window.cy.get('[href*= "/plasticpollution/#/Wastewater"]').click();

    window.cy.url().should('include','Wastewater')
   
    window.cy.get('[href= "/plasticpollution/#/Ocean"]').click();

    window.cy.url().should('include','Ocean')

    window.cy.get('[class="oceanMain"]').get('[class*="floatButton"]').get('[href*= "FishMarket"]')

    window.cy.visit('http://localhost:3000/plasticpollution/#/FishMarket')

    window.cy.get('[href="/plasticpollution/#/HumanConsumptionNano"]').click();
})

})


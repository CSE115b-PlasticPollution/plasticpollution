describe('Macro to Micro transition to Nano', function() {
    it('tests start an adventure route: macro', function() {
        window.cy.visit('http://localhost:3000/plasticpollution/#/Macro')
        
        window.cy.get('a[href*="MacroDump"]').click()

        window.cy.get('a[href*="MacroOcean"]').click()

        window.cy.get('a[href*="Ocean"]').click()

        window.cy.get('a[href*="FishMarket"]').click()

        window.cy.get('a[href*="HumanConsumptionNano"]').click()

    })
    
    })
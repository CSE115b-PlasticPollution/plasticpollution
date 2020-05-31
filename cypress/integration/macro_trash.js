describe('Testing Macro Route macro->landfill->home', function() {
    it('tests start an adventure route: macro', function() {
        window.cy.visit('http://localhost:3000/plasticpollution/#/Macro')
        
        window.cy.get('a[href*="Macro2"]').click().get('[class="landfill_map_container"]')

        window.cy.get('a[href="./#/"]').click()

    })
    
    })
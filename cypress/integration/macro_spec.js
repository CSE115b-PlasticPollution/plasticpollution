describe('Testing Macro Route', function() {
    it('tests start an adventure route: macro', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Adventure').click()
    
        window.cy.contains("Macro").click()
    
        window.cy.url().should('include', 'Macro#/')
        
        window.cy.get('a[href*="MacroRecycle"]').click()

        window.cy.get('a[href*="MacroAsia"]').click()

        window.cy.get('a[href*="MacroRecycle"]').click()

        window.cy.get('a[href*="Macro2"]').click()

        window.cy.get('a[href*=Macro]').click()

        window.cy.get('a[href*="Macro2"]').click()

        window.cy.get('a[href*="Macro"]').click()

        window.cy.get('a[href*="MacroReuse"]').click()

        window.cy.get('a[href*="Macro"]').click()

        window.cy.get('a[href*="MacroDump"]').click()

        window.cy.get('a[href*="MacroOcean"]').click()

        window.cy.get('a[href*="MacroDump"]').click()

        window.cy.get('a[href*="Macro"]').click()

    })
    
    })
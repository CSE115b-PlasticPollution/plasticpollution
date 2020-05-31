describe('Testing Macro Route - recycle->asia->finish', function() {
    it('tests start an adventure route: macro', function() {
        window.cy.visit('http://localhost:3000/plasticpollution/#/Macro')
        
        window.cy.get('a[href*="MacroRecycle"]').click()

        window.cy.get('[class*= "recyclable_fact_cont_macro"]').find('[class*= "bottle_recyc_macro"]').click().find('[class*= "fabrictitle"]')
        
        window.cy.get('a[href*="MacroAsia"]').click()

        window.cy.get('[class*= "landfill_macro_double_cont"]')

    })

    //<Card class1="recyc_macro_item bottle_recyc_macro"  class2="recyc_macro_item" title2='Yes!' text2="Plastic bottles should be recycled just make sure they are dry and cleaned"/>
    
    })
const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class AddContaPage{

    viewUrlHomePage(){
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}/addConta`);
    }

    fillContaName(data){
        cy.xpath(el.nameField).invoke('val', data.accountName);
    }

    saveConta(){
        cy.xpath(el.saveButton).click();
    }

}

export default new AddContaPage();
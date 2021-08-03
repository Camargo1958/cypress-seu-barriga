const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class RegisterPage{

    accessRegister(){
        cy.visit('/cadastro');
    }

    fillRegister(data){
        cy.xpath(el.nameField).invoke('val', data.username);
        cy.xpath(el.emailField).invoke('val', data.email);
        cy.xpath(el.passwordField).invoke('val', data.password);
        //cy.get(el.buttonLogin).click();
    }

    viewUrlRegisterPage(){
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}/cadastro`);
    }
}

export default new RegisterPage();
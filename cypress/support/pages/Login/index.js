const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class Login{
    accessLogin(){
        cy.visit('/login');
    }

    fillLogin(data){
        cy.get(el.username).invoke('val', data.username);
        cy.get(el.password).invoke('val', data.password);
        cy.get(el.buttonLogin).click();
    }

    selectNewUser(){
        cy.xpath(el.newUserLink).click();
    }

    viewWrongUserErrorMessage(){
        cy.xpath(el.inputErrorMessage).should('include.text','Problemas com o login do usuário');
    }

    viewBlankUserErrorMessage(){
        cy.xpath(el.inputErrorMessage).should('include.text','Email é um campo obrigatório');
    }

    viewBlankPassErrorMessage(){
        cy.xpath(el.inputErrorMessage).should('include.text','Senha é um campo obrigatório');
    }

    viewWrongPassErrorMessage(){
        cy.xpath(el.inputErrorMessage).should('include.text','Problemas com o login do usuário');
    }

}

export default new Login();
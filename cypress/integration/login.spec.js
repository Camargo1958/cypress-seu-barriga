import Login from '../support/pages/Login';
import HomePage from '../support/pages/HomePage';
import loginBuilder from '../builders/login';

describe('Login Seu Barriga', () => {
    beforeEach(() => {
        Login.accessLogin();
    });

    it('Login com sucesso', () => {
        Login.fillLogin(loginBuilder.loginSuccess);
        HomePage.viewSuccessMessage();
        HomePage.viewUrlHomePage();
    });

    it('Tentativa de Login - usuário inválido', () => {
        Login.fillLogin(loginBuilder.loginUserInvalid);
        Login.viewWrongUserErrorMessage();
    });

    it('Tentativa de Login - senha inválida', () => {
        Login.fillLogin(loginBuilder.loginPassInvalid);
        Login.viewWrongUserErrorMessage();
    });

    it('Tentativa de Login - usuário não preenchido', () => {
        Login.fillLogin(loginBuilder.userNotFilled);
        Login.viewBlankUserErrorMessage();
    });

    
    it('Tentativa de Login - senha não preenchida', () => {
        Login.fillLogin(loginBuilder.passNotFilled);
        Login.viewBlankPassErrorMessage();
    })

});
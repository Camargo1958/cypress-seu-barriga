import Login from '../support/pages/Login';
import HomePage from '../support/pages/HomePage';
import AddContaPage from '../support/pages/AddContaPage';
import loginBuilder from '../builders/login';
import accountBuilder from '../builders/account';

describe('Login Seu Barriga', () => {
    beforeEach(() => {
        Login.accessLogin();
    });

    it('Adicionar contas com sucesso', () => {
        Login.fillLogin(loginBuilder.loginSuccess);
        HomePage.resetDB();
        HomePage.selectContasAdicionar();
        AddContaPage.fillContaName(accountBuilder.newAccountSuccess);
        AddContaPage.saveConta();
    });

    it('Listar contas com sucesso', () => {
        Login.fillLogin(loginBuilder.loginSuccess);
        HomePage.selectContasListar();
    });

});

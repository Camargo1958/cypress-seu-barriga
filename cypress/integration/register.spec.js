import RegisterPage from '../support/pages/RegisterPage';
import Login from '../support/pages/Login';
import registerBuilder from '../builders/register';

describe('Novo usuário Seu Barriga', () => {
    beforeEach(() => {
        Login.accessLogin();
    });

    it('Cadastro com sucesso', () => {
        Login.selectNewUser();
        RegisterPage.fillRegister(registerBuilder.registerSuccess);
    });
});

const RegisterPage = require ('../pageobjects/register.page');

describe('Register form', () => {
    it('should deny access with wrong username', () => {
        RegisterPage.open ();
        RegisterPage.email.setValue('narella@')
        RegisterPage.password.setValue('Contraseña1122')
        RegisterPage.submit()
        expect(RegisterPage.alertEmail).toHaveText("Invalid email address")
    })
});
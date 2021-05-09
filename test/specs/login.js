const LoginPage = require ('../pageobjects/login.page');

describe('Login buttons', () => {
    it('should verify that the all the buttons in the form are enabled', () => {
        LoginPage.open ();
        expect(LoginPage.btnSubmit).toBeClickable;
        expect(LoginPage.btnReset).toExist;
        expect(LoginPage.btnReset).toBeClickable;
        browser.pause(2000);
    })
});
describe('Login credentials verification', () => {
    it('should deny access when providing both a wrong username and a wrong passcode', () => {
        LoginPage.open ();
        LoginPage.email.setValue('narella@')
        LoginPage.password.setValue('Contraseña')
        LoginPage.submit()
        expect(LoginPage.alertEmail).toHaveText('Invalid email address.')
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(2000);
    })
    it('should deny access when providing a correct username and a wrong password', () => {
        LoginPage.email.setValue('narella@gmail.com')
        LoginPage.password.setValue('Contraseña')
        LoginPage.submit()
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(2000);
    })
    it('should allow access when providing correct inputs', () => {
        LoginPage.email.setValue('narella@gmail.com')
        LoginPage.password.setValue('Contraseña1122')
        LoginPage.submit()
        expect(LoginPage.alertPassword).not.toBeDisplayed('Invalid password.')
        expect(LoginPage.alertEmail).not.toBeDisplayed('Invalid email address.')
        expect(LoginPage.alertResult).toBeDisplayed('Your login data is: narella@gmail.com  Contraseña1122')
        browser.pause(2000);
    })
});
describe('Login form', () => {
    it('should deny access when providing a wrong username and leaving the passcode field empty', () => {
        LoginPage.open ();
        LoginPage.email.setValue('Narella')
        LoginPage.password.setValue('')
        LoginPage.submit()
        expect(LoginPage.alertEmail).toHaveText('Invalid email address.')
        browser.pause(2000);
    })
});


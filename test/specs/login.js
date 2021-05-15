const LoginPage = require ('../pageobjects/login.page');

describe('Login TESTS', () => {
  beforeAll('Open browser', () => {
    LoginPage.open();
  });
  describe('Login buttons', () => {
      it('should verify that the all the buttons in the form are enabled', () => {
          expect(LoginPage.btnSubmit).toBeClickable;
          expect(LoginPage.btnReset).toExist;
          expect(LoginPage.btnReset).toBeClickable;
          browser.pause(2000);
      });
  });
  describe("Login email testing", () => {
    it("if email input is empty show the proper message", () => {
        LoginPage.inputEmail.click();
        LoginPage.inputEmail.keys("Tab");
        expect(LoginPage.alertEmail).toHaveText("The email must contain a valid format");
        browser.pause(3000);
    });
    it("if email is invalid show the proper message", () => {
      LoginPage.setEmail("invalid");
      expect(LoginPage.alertEmail).toHaveText("Invalid Email");
      browser.pause(2000);
    });
  it("if email is valid show the proper mssg", () => {
      LoginPage.setEmail("narella@gmail.com");
      expect(LoginPage.alertEmail).toHaveText("Correct");
      browser.pause(2000);
    });
  });
  describe("Login password testing", () => {
    it("if password input is empty show the proper mssg", () => {
        LoginPage.inputPassword.click();
        LoginPage.inputPassword.keys("Tab");
        expect(LoginPage.alertPassword).toHaveText("Doesn't match the password");
        browser.pause(3000);
    });
    it("if password is invalid show the proper mssg", () => {
        LoginPage.setPassword("invalidpass");
        expect(LoginPage.alertPassword).toHaveText("Doesn't match the password");
        browser.pause(2000);
    });
    it("if password is valid show the proper mssg", () => {
        LoginPage.setPassword("password01");
        expect(LoginPage.alertPassword).toHaveText("Correct");
        browser.pause(2000);
    });
});
  describe('Login form', () => {
      it('should allow access when providing correct inputs', () => {
          LoginPage.inputEmail.setValue('narella@gmail.com')
          LoginPage.inputPassword.setValue('Contraseña1122')
          LoginPage.submit()
          expect(LoginPage.alertPassword).not.toBeDisplayed('The password must contain at least 8 characters, consisting of letters and numbers')
          expect(LoginPage.alertEmail).not.toBeDisplayed('The email must contain a valid format')
          expect(LoginPage.alertResult).toBeDisplayed('Your login data is: narella@gmail.com  Contraseña1122')
          browser.pause(2000);
      });
  });
});

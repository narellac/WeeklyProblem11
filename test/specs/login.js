const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
      LoginPage.open();
    });
    describe("Login email testing", () => {
      it("if email input is empty show the proper message", () => {
        LoginPage.inputEmail.click();
        LoginPage.inputEmail.keys("Tab");
        expect(LoginPage.alertEmail).toHaveText("The email must contain a valid format");
        browser.pause(3000);
    });
      it("if email is invalid show the proper message", () => {
        LoginPage.setEmail("inval");
        expect(LoginPage.alertEmail).toHaveText("The email must contain a valid format");
        browser.pause(2000);
    });
  });
  describe("Login password testing", () => {
    it("if password input is empty show the proper message", () => {
        LoginPage.inputPassword.click();
        LoginPage.inputPassword.keys("Tab");
        expect(LoginPage.alertPassword).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
        browser.pause(3000);
    });
    it("if password is invalid show the proper message", () => {
        LoginPage.setPassword("inval");
        expect(LoginPage.alertPassword).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
        browser.pause(2000);
    });
});
describe("Testing Login btn", () => {
    it("Register btn display user data", () => {
        LoginPage.login("validemail@gmail.com", "Password01");
        LoginPage.btnSubmit.keys("Tab");
        LoginPage.btnSubmit.keys("Enter");
        expect(LoginPage.alertFinal).toHaveTextContaining(["validemail@gmail.com",
        "Password01"]);
        browser.pause(3000);
    });
  });
});

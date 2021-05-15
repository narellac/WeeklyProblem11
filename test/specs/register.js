const RegisterPage = require("../pageobjects/register.page");

describe("Register automation", () =>{
    beforeAll("Open browser", () => {
        RegisterPage.open();
    });
    describe("Register name testing", () => {
        it("if name input is empty show the proper message", () => {
            RegisterPage.inputName.click();
            RegisterPage.inputName.keys("Tab");
            expect(RegisterPage.nameScreen).toHaveText("The name must contain at least 6 letters and a space");
            browser.pause(3000);
        });
        it("if name is invalid show the proper message", () => {
          RegisterPage.setName("name");
          expect(RegisterPage.nameScreen).toHaveText("The name must contain at least 6 letters and a space");
          browser.pause(2000);
        });
        it("if name has numbers show the proper message", () => {
            RegisterPage.setName("2222 2222");
            expect(RegisterPage.nameScreen).toHaveText("The name must contain at least 6 letters and a space");
            browser.pause(2000);
        });
    });
    describe("Register email testing", () => {
      it("if email input is empty show the proper message", () => {
          RegisterPage.inputEmail.click();
          RegisterPage.inputEmail.keys("Tab");
          expect(RegisterPage.emailScreen).toHaveText("The email must contain a valid format");
          browser.pause(3000);
      });
      it("if email is invalid show the proper message", () => {
          RegisterPage.setEmail("invalidmail.com");
          expect(RegisterPage.emailScreen).toHaveText("The email must contain a valid format");
          browser.pause(2000);
      });
  });
  describe("Register password testing", () => {
    it("if password input is empty show the proper message", () => {
        RegisterPage.inputPassword.click();
        RegisterPage.inputPassword.keys("Tab");
        expect(RegisterPage.passwordScreen).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
        browser.pause(3000);
    });
    it("if password is invalid show the proper message", () => {
        RegisterPage.setPassword("inval");
        expect(RegisterPage.passwordScreen).toHaveText("The password must contain at least 8 characters, consisting of letters and numbers");
        browser.pause(2000);
    });
  });
  describe("Register confirm password testing", () => {
    it("if confirm input is empty show the proper mssg", () => {
        RegisterPage.inputConfirm.click();
        RegisterPage.inputConfirm.keys("Tab");
        expect(RegisterPage.confirmScreen).toHaveText("Passwords do not match");
        browser.pause(3000);
    });
    it("if confirm password is wrong show the proper mssg", () => {
        RegisterPage.setConfirm("wrong01");
        expect(RegisterPage.confirmScreen).toHaveText("Passwords do not match");
        browser.pause(2000);
    });
  });
  //NO ENCUENTRO EL ERROR
  describe("Testing Reset btn", () => {
    it("Reset btn erase all inputs", () => {
        RegisterPage.btnSubmit.keys("Tab");
        RegisterPage.btnReset.keys("Enter");
        expect(RegisterPage.allSets()).toEqual();
        browser.pause(3000);
    });
});
 //NO ENCUENTRO EL ERROR
describe("Testing Register btn", () => {
    it("Register btn display user data", () => {
        RegisterPage.completeRegister("Valid User", "validemail@gmail.com", "Password01", "Password01");
        RegisterPage.btnSubmit.keys("Tab");
        RegisterPage.btnSubmit.keys("Enter");
        expect(RegisterPage.alertFinal).toHaveTextContaining(["Valid User",
        "validemail@gmail.com",
        "Password01",
        "Password01"]);
        browser.pause(3000);
    });
  });
});
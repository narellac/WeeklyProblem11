
const page = require ('../pageobjects/page');

class LoginPage extends page {

    //login credentials selectors
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }

    //buttons selectors
    get btnSubmit () { return $('#submit') }
    get btnReset () { return $('#reset') }

    //alerts selectors
    get alertEmail () { return $('#error1') }
    get alertPassword () { return $('#error2') }
    get alertResult () { return $ ('#hidden') }

    login (email, password) {
      this.inputEmail.setValue(email);
      this.inputPassword.setValue(password);
    }
    setEmail (value){
        this.inputEmail.click();
        this.inputEmail.setValue(value);
        this.inputEmail.keys("Tab");
    }
    setPassword (value){
        this.inputPassword.click();
        this.inputPassword.setValue(value);
        this.inputPassword.keys("Tab");
    }

    //login path
    open () {
        return browser.url('https://narellac.github.io/WeeklyProblem09/login.html');
    }
    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
const page = require ('../pageobjects/page');

class LoginPage extends page {

    //login credentials selectors
    get email () { return $('#email') }
    get password () { return $('#password') }

    //buttons selectors
    get btnSubmit () { return $('#submit') }
    get btnReset () { return $('#reset') }

    //alerts selectors
    get alertEmail () {return $$('.error')[0]}
    get alertPassword () {return $$('.error')[1]}
    get alertResult () {return $ ('#hidden')}

    //login path
    open () {
        return super.open('https://narellac.github.io/WeeklyProblem09/login.html');
    }
    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();

const page = require ('../pageobjects/page')
class RegisterPage extends page {

    get inputUsername () { return $('#name') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get inputConfirmPass () { return $ ('#confirm') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
class LoginPage {
  get inputEmail () { return $('#email') }
  get alertEmail () { return $$('.error')[0] }
  get inputPassword () { return $('#password') }
  get alertPassword () { return $$('.error')[1] }
  get btnSubmit () { return $('#submit') }
  get alertFinal () { return $('#hidden') }


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
  open () {
    return browser.url('https://narellac.github.io/WeeklyProblem09/login.html');
  }
}

module.exports = new LoginPage();
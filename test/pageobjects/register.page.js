class RegisterPage {
  get inputName () { return $('#name') }
  get nameScreen () { return $$('.error')[0] }
  get inputEmail () { return $('#email') }
  get emailScreen () { return $$('.error')[1] }
  get inputPassword () { return $('#password') }
  get passwordScreen () { return $$('.error')[2] }
  get inputConfirm () { return $('#confirm') }
  get confirmScreen () { return $$('.error')[3] }
  get btnSubmit () { return $('#submit') }
  get btnReset () { return $$('.reset')[0] }
  get alertFinal () { return $('#hidden') }

  completeRegister (name, email, password, confirm) {
      this.inputName.setValue(name);
      this.inputEmail.setValue(email);
      this.inputPassword.setValue(password);
      this.inputConfirm.setValue(confirm);
  }
  setName (value){
      this.inputName.click();
      this.inputName.setValue(value);
      this.inputName.keys("Tab");
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
  setConfirm (value){
      this.inputConfirm.click();
      this.inputConfirm.setValue(value);
      this.inputConfirm.keys("Tab");
  }
  allSets(){
    this.setName();
    this.setEmail();
    this.setPassword();
    this.setConfirm();
  }
  open () {
      return browser.url('https://narellac.github.io/WeeklyProblem09/register.html');
  }
}

module.exports = new RegisterPage();
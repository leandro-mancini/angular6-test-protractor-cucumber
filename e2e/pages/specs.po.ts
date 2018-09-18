import { browser, by, element } from 'protractor';
import { CommonPage } from './common.po';

export class LoginPage extends CommonPage {

  readonly username = element(by.id('username'));
  readonly password = element(by.id('password'));
  readonly loginButton = element(by.id('btnLogin'));

  navigateTo() {
    return browser.get('/login');
  }

  getElementRequired() {
    return element(by.id('loginContent'));
  }

  setUsername(value: string) {
    return this.setValue(this.username, value);
  }

  setPassword(value: string) {
    return this.setValue(this.password, value);
  }

  submit() {
    return this.loginButton.click();
  }

}

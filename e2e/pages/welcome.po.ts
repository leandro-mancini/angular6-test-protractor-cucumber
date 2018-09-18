import {browser, by, element} from 'protractor';
import {CommonPage} from './common.po';

export class WelcomePage extends CommonPage {

  readonly title = element(by.css('h1'));

  getElementRequired() {
    return element(by.id('welcomeContent'));
  }

  logoutLink() {
    return element(by.css('.header__logout'));
  }
}

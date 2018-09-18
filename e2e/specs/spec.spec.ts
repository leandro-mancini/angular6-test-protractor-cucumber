import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { expect } from './../config/helpers/chai-imports';

import { LoginPage } from '../pages/specs.po';
import { WelcomePage } from '../pages/welcome.po';

const {Given, Then, When, Before} = require('cucumber');

let app: LoginPage;
let welcome: WelcomePage;

Before(() => {
  app = new LoginPage();
  welcome = new WelcomePage();
});

Given('o usuário está na página de login', () => {
  return app.navigateTo();
});

Given(/^o usuário define o nome de usuário '([^']*)'$/, (userId: string) => {
  return app.setUsername(userId);
});

Given(/^o usuário define a senha '([^']*)'$/, (password: string) => {
  return app.setPassword(password);
});

When('o usuário efetua login no aplicativo', () => {
  return app.submit();
});

Then('o usuário é redirecionado para a página de boas-vindas', (done: any) => {
  browser.wait(welcome.getElementRequired().isPresent(), 5000).then(() => {
    expect(welcome.title.getText()).to.be.eventually.equal('Welcome Guest!');
    done();
  });
});

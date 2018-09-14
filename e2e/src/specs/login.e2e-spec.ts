import { browser, protractor } from 'protractor';
import { LoginPage } from '../pages/login.po';
import { DashboardPage } from '../pages/dashboard.po';

describe('Eu usuário preciso conseguir efetuar o login no sistema.', () => {
  let page: LoginPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new LoginPage();

    browser.get('/login');
  });

  it('deve ter o label ´Nome do usuário´ e ´Senha´ e um botão ´Entrar´', () => {
    expect(page.usernameLabel.getText()).toEqual('Nome do usuário');
    expect(page.passwordLabel.getText()).toEqual('Senha');
    expect(page.signIn.getText()).toEqual('Entrar');
  });

  it('deve exibir uma mensagem de erro para o usuário se ele fornecer campos vazio', () => {
    page.trySignIn('', '');
    browser.wait(EC.visibilityOf(page.errorMessage));
    expect(page.errorMessage.getText()).toEqual('Usuário ou senha incorretos');
  });

  it ('deve exibir uma mensagem de erro para o usuário se ele fornecer credenciais incorretas como: ´usuario: atecubanos´ e ´senha: 123´', () => {
    page.trySignIn('atecubanos', '123');
    browser.wait(EC.visibilityOf(page.errorMessage));
    expect(page.errorMessage.getText()).toEqual('Usuário ou senha incorretos');
  });

  it ('deve exibir uma mensagem de erro para o usuário se eles fornecerem credenciais incorretas como: ´usuario: admin´ e ´senha: 123´', () => {
    page.trySignIn('admin', '123');
    browser.wait(EC.visibilityOf(page.errorMessage));
    expect(page.errorMessage.getText()).toEqual('Usuário ou senha incorretos');
  });

  it ('deve redirecionar o usuário para a página do painel se eles fornecerem credenciais corretas', () => {
    const dashboardPage = new DashboardPage();
    page.trySignIn('test', '123');
    browser.wait(EC.visibilityOf(dashboardPage.title));
    expect(dashboardPage.title.isPresent()).toBeTruthy();
  });
});

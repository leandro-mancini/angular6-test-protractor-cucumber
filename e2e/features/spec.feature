Feature: login - Queremos testar o processo de login

  Scenario: Verifique se o usuário pode fazer login no aplicativo
  Verifique se o usuário pode entrar no aplicativo usando as credenciais corretas e se os cookies foram criados com sucesso.
    Given o usuário está na página de login
    And o usuário define o nome de usuário 'test'
    And o usuário define a senha '123'
    When o usuário efetua login no aplicativo
    Then o usuário é redirecionado para a página de boas-vindas

Feature('login');

Scenario('login com sucesso',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br/') 
  I.click('Login')
  I.waitForText('login', 10)
  I.fillField('#user', 'ju07felix@Gmail.com')
  I.fillField('#password', '123456')
  I.click('#btnLogin')
  I.waitForText('Login realizado', 3)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/') 
    I.click('Login')
    I.waitForText('login', 10)
    I.fillField('#user', 'ju07felix@Gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)

  }); 

  Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/') 
    I.click('Login')
    I.waitForText('login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)
  
  }); 

  Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/') 
    I.click('Login')
    I.waitForText('login', 10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

  }); 


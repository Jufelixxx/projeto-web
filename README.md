Projeto de Automação Web - CodeCeptJS + JavaScript
Este é um projeto de automação web utilizando CodeCeptJS e JavaScript, que visa automatizar testes e interações com páginas da web de forma simples e eficiente. O projeto foi desenvolvido com o objetivo de facilitar a execução de testes automatizados, aumentando a produtividade e a qualidade do código.

💻 Tecnologias Utilizadas
CodeCeptJS - Framework para automação de testes.

JavaScript - Linguagem principal utilizada para o desenvolvimento dos testes.

Node.js - Ambiente de execução para JavaScript no servidor.

NPM - Gerenciador de pacotes para instalar dependências.

🚀 Instalação
1. Clone o repositório
Primeiramente, clone este repositório em sua máquina local:

bash
Copiar
git clone https://github.com/seu-usuario/projeto-automacao-web.git
2. Instale as dependências
Dentro da pasta do projeto, execute o seguinte comando para instalar as dependências necessárias:

bash
Copiar
npm install
3. Execute os testes
Para rodar os testes automatizados, basta executar o seguinte comando:

bash
Copiar
npx codeceptjs run
Isso irá executar os testes de automação de acordo com as configurações do seu projeto.

⚙️ Configuração
Caso deseje personalizar as configurações do CodeCeptJS, como os navegadores a serem utilizados, acesse o arquivo codecept.conf.js e altere conforme necessário.

📝 Exemplos de Testes
Aqui estão alguns exemplos de testes que podem ser executados:


Scenario('Abrir a página inicial do site', ({ I }) => {
  I.amOnPage('https://www.exemplo.com');
  I.see('Título da Página');
});
Teste de Login
js
Copiar
Feature('Testando Login');

Scenario('Login com usuário válido', ({ I }) => {
  I.amOnPage('https://www.exemplo.com/login');
  I.fillField('username', 'usuario');
  I.fillField('password', 'senha');
  I.click('Entrar');
  I.see('Bem-vindo, Usuário');
});
📞 Contato
Caso tenha dúvidas ou sugestões sobre o projeto, entre em contato comigo!

Júlia Félix - LinkedIn

🔑 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## 🛒 Projeto de Carrinho de Compras Online - Trabalho em Duplas

<img src="https://github.com/user-attachments/assets/e31dac5c-0b37-4c8b-bf29-8e5af4fb0f44" alt="Post Instagram Pagamento Pix Desconto Simples Azul" width="300">


## 📋 Descrição do Projeto
Neste projeto, você irá simular um sistema de e-commerce onde os clientes poderão adicionar produtos ao carrinho, visualizar uma lista detalhada dos itens selecionados, calcular o subtotal de cada produto e ver o valor total da compra.

Diferente de um sistema totalmente aberto, os produtos e preços já estão pré-definidos, e o cliente apenas seleciona qual produto deseja adicionar ao carrinho. O sistema também oferece uma confirmação para o cliente sobre a adição dos itens ao carrinho.


https://github.com/user-attachments/assets/5154b443-110d-4f13-abc8-a73834398c63



## 🧑‍🤝‍🧑 Trabalho em Dupla
Esse projeto será desenvolvido em dupla, o que significa que vocês deverão colaborar para:

Organizar o fluxo de trabalho: Um bom uso do Git para versionamento do código e organização de branches será essencial.
Dividir as responsabilidades: Uma pessoa pode se concentrar em uma parte específica do código (por exemplo, a funcionalidade de adicionar produtos) enquanto a outra pode se focar na lógica de cálculo ou na exibição de dados.

[Planilha para inserir as duplas](https://docs.google.com/spreadsheets/d/1aJoidFUJjLwzHmey7xvdOYJFz_Qf-_r6Wu9fHzB1qrU/edit?usp=sharing)  


## 🎯 Objetivos de Aprendizagem

Este projeto ajudará você a praticar os seguintes conceitos:

#### Interação com o Usuário via `prompt()` e `alert()`:

- Captura da escolha do cliente com `prompt()`.
- Confirmação de ações com `confirm()`.
- Exibição de resultados com `alert()`.


#### Manipulação de Arrays e Objetos:
- Os produtos são armazenados como objetos em um array pré-definido.
- O carrinho de compras também é um array de objetos, permitindo fácil manipulação e cálculos.


#### Cálculos Simples:

- Cálculo do subtotal de cada item (quantidade × preço).
- Soma do total da compra, considerando todos os itens no carrinho.

## ✅ Critérios de Aceitação


Para que o projeto seja considerado completo, ele deve atender aos seguintes requisitos:

#### 1.Seleção de Produtos:

- O cliente pode escolher entre produtos pré-definidos.
- O sistema exibirá o preço do produto selecionado.
- O cliente será solicitado a confirmar se deseja adicionar o produto ao carrinho.

#### 2.Visualização do Carrinho:

- O cliente poderá visualizar todos os produtos no carrinho, com detalhes como nome, preço, quantidade e subtotal.


- O valor total da compra será exibido.


#### 4.Cálculo do Total:

- O sistema calculará o subtotal de cada produto (preço × quantidade) e o valor total de todos os itens no carrinho.

#### 5.Uso de Objetos e Arrays:

- Os produtos disponíveis e os produtos no carrinho serão armazenados em objetos.
- O carrinho será representado por um array de objetos.


## 🛠 Funcionalidades
##### 1. Adicionar Produtos ao Carrinho:
- O cliente pode adicionar produtos pré-definidos ao carrinho.

~~~javascript
O sistema solicitará ao cliente, via `prompt()`, que escolha um produto entre os disponíveis.
~~~


- Os produtos disponíveis são:
~~~javascript
Camisa: R$ 50,00
Calça: R$ 100,00
Sapato: R$ 150,00
Boné: R$ 25,00
~~~


Após a escolha do produto, o sistema exibirá o preço e perguntará se o cliente deseja confirmar a adição ao carrinho e a quantidade de produtos.


2. Visualizar o Carrinho de Compras:
- O cliente poderá visualizar a lista de produtos adicionados ao carrinho.
- O sistema exibirá, via `alert()`, os detalhes do carrinho, incluindo o nome do produto, preço unitário, quantidade e subtotal (preço × quantidade).
- Além disso, o valor total da compra será exibido no final.


3. Calcular o Total da Compra:
O sistema calculará automaticamente o valor total da compra, somando todos os subtotais dos produtos adicionados ao carrinho.


## 💡 Dica
- Usar objetos no JavaScript ajuda a estruturar melhor os dados do produto (nome, preço, quantidade, subtotal). Além disso, armazenar os objetos em um array permite uma fácil manipulação e visualização dos itens do carrinho.

- O seu código já está devidamente linkado com o arquivo `JavaScript` no `HTML`, o que significa que você não precisa se preocupar com a integração entre os arquivos. Toda a lógica que você desenvolver será automaticamente conectada ao `HTML`.
Tudo o que você precisa fazer agora é implementar a solução diretamente no arquivo `index.js`. Esse arquivo já está preparado para receber seu código, e ao salvá-lo, as funcionalidades estarão ativas e prontas para rodar no navegador.
Agora é só focar no desenvolvimento da funcionalidade, como adicionar produtos ao carrinho, calcular o subtotal, visualizar os produtos e calcular o valor total da compra!

- O método `push()` é uma das principais ferramentas para trabalhar com arrays em JavaScript. Ele permite adicionar novos elementos ao final de um array. Quando você utiliza `push()` para incluir objetos (produtos) em um array, isso facilita a manipulação dos dados de maneira dinâmica, como no caso de adicionar produtos ao carrinho.

Exemplo:
~~~javascript
let carrinho = []; // Inicializando o array vazio do carrinho

carrinho.push('Camiseta'); // Adicionando um item ao carrinho
console.log(carrinho); // ['Camiseta']

~~~


### Git e GitHub:
- Uso de comandos do Git: `git add`, `git commit`, `git pull`, `git push`.
- Gerenciamento de repositórios no GitHub (clone e fork).


## 🛠 Instruções para Trabalhar em Dupla e Versionar o Projeto

### 1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.
 
#### Como forkar?

[Como fazer um fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo `package.json`, você precisa rodar `npm install` para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.


## :thinking: Cuidado com os dados...
No JavaScript, ao capturar entradas de dados do usuário, o `prompt()` retorna os valores sempre como **strings** (texto). Isso significa que, mesmo que o usuário digite um número, ele será tratado como uma string pelo programa. 

No entanto, para realizar **operações matemáticas** (como somas, subtrações ou divisões), você precisa trabalhar com **números** (inteiros ou decimais). Tentar realizar operações matemáticas com strings pode gerar resultados inesperados ou erros.

#### O JavaScript nativamente oferece funções de conversão de dados como parseInt() e parseFloat() para converter strings em números:

Por exemplo:
~~~javascript
// Exemplo de captura de produtos
const nomeProduto = prompt('Digite o nome do produto:');
const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
const quantidadeProduto = parseInt(prompt('Digite a quantidade do produto:'));

// Lógica para calcular o subtotal e exibir com alert()

~~~

### 4. Rodando o projeto

- Vá até a pasta do projeto no terminal ou prompt de comando.
- Digite o seguinte comando no terminal
  
~~~javascript
npm start
~~~

- Isso irá rodar o comando `"start": "lite-server"` que está configurado no package.json. O `lite-server` vai automaticamente:

- Criar um servidor local.
- Abrir o seu navegador padrão.
- Carregar o arquivo index.html do seu projeto.



### 5. Desenvolvendo o código no o arquivo index.js
Abra seu editor de código preferido (por exemplo, Visual Studio Code). No editor, abra o arquivo `index.js` que está no repositório.

Neste desafio, você utilizará o `prompt()` para capturar os dados dos produtos (nome, preço e quantidade) e o `alert()` para exibir o subtotal e o total da compra. Abaixo está um exemplo básico de como capturar as entradas do usuário:

~~~javascript
// Exemplo de captura de produtos
const nomeProduto = prompt('Digite o nome do produto:');
const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
const quantidadeProduto = parseInt(prompt('Digite a quantidade do produto:'));

// Lógica para calcular o subtotal e exibir com alert()


~~~

### 6. Versionamento com Git
Depois de implementada a solução e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

Quando você estiver trabalhando em dupla, é fundamental usar o Git para controlar as versões do projeto de forma organizada e eficiente. Isso ajuda a evitar conflitos de código e facilita a colaboração. 

#### ⚠️ Atenção 

O uso de branches é uma prática recomendada para manter o fluxo de trabalho limpo, permitindo que cada pessoa trabalhe em partes diferentes do código sem interferir no trabalho do outro.

### 7. Enviar o Repositório para o Moodle

Você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.


#### Links
[Constantes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)

[Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

[Diferenças de var const e let](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)

[Convertendo String para Inteiro](https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript)

[If and Else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

[O prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

[O alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

### 🎯  Hacker Edition:

Esta seção é apenas para quem quer um desafio a mais e deseja explorar conceitos mais avançados. Não é obrigatório, mas pode ser uma excelente oportunidade para desenvolver suas habilidades de programação, especialmente com testes automatizados.

Se você se sente confortável com o que já foi implementado no carrinho de compras e quer ir além, você será desafiado a implementar testes automáticos para garantir que todas as funcionalidades funcionem conforme o esperado. Isso irá fortalecer sua capacidade de escrever código mais robusto e confiável.

- Implementar testes para cada funcionalidade principal do carrinho de compras (adicionar, visualizar e calcular total).
- Usar Testes Unitários para verificar se as funções estão retornando os valores esperados.
- Utilizar uma biblioteca de testes como Jest (ou outra de sua escolha) para criar e rodar os testes.

## **Boa sorte e bom código!** 🚀📘


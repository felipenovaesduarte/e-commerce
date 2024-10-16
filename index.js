console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
  const produto = produtosDisponiveis.find(p => p.nome === nomeProduto);
  if (produto) {
    carrinho.push(produto);
    console.log(`${produto.nome} adicionado ao carrinho.`);
  } else {
    console.log("Produto não encontrado.");
  }
}

// Função para calcular o total do carrinho
function calcularTotal() {
  return carrinho.reduce((total, produto) => total + produto.preco, 0);
}

// Função para exibir os itens do carrinho
function exibirCarrinho() {
  if (carrinho.length === 0) {
    console.log("O carrinho está vazio.");
  } else {
    console.log("Itens no carrinho:");
    carrinho.forEach(produto => {
      console.log(`- ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
    });
    console.log(`Total: R$ ${calcularTotal().toFixed(2)}`);
  }
}

// Exemplo de uso
adicionarAoCarrinho("Camisa");
adicionarAoCarrinho("Boné");
exibirCarrinho();

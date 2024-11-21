document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos(produtos);
  });



   function carregarProdutos(produtos){
    produtos.forEach((produto) => {
        console.log(produto); 
        console.log(produto.id, produto.title); 
      });
    }

   function criarProduto(produto) {
    const container = document.getElementById('produtos-container');
    produtos.forEach(produto => {
      const artigo = criarProduto(produto);
      container.appendChild(artigo);
    });
  }

  function atualizaCesto(){

  }



  
let xhttp = new XMLHttpRequest();

function buscarProduto() {
    xhttp.open("GET","https://pascoa-chiquinha.herokuapp.com/produto/");
    xhttp.send();
    xhttp.onload = function () {
        let lsProduto = this.response;
        lsProduto = JSON.parse(lsProduto);
        montarListaProdutosHtml(lsProduto);
}
}
function montarListaProdutosHtml(lsProduto){
  let listaProduto = "";
  for (produto of lsProduto) {
       listaProduto += `
       <div class="embrulho"">
       <div id="produto">
           <img src="${produto.imagem}" alt="">
           <p> ${produto.nome}
               <span class="valor">${produto.valor}</span> 
           </p>
           <i class="material-icons">&#xe8cc;</i>
       </div>
       </div>
       `;
  }
  document.getElementById("listaProduto").innerHTML = listaProduto;
}
montarListaProdutosHtml(lsProduto);

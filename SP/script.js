//Função para buscar e mostrar produtos do DOM
function fetchProducts() {
  fetch('list_products.php')
    .then(response => response.json())//Converte a resposta para JSON
    .then(data => {
      const productList = document.getElementById('productList');
      productList.innerHTML = '';//Limpa o conteúdo da lista de produtos

      //Loop por cada produto e adcionar ao DOM
      data.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${product.name}</h3>
          <p>Preço: R$${product.price}</p>
          <p>${product.description}</p>
          <button onclick="deleteProduct(${product.id})">EXCLUIR</button>
          <button onclick="editProduct(${product.id}, '${product.name}', ${product.price}, '${product.description}')">EDITAR</button>
          `;
        productList.appendChild(div);
      });
    });
}

//Função para excluir um produto
function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      fetch(`delete_product.php?id=${id}`, { method: 'GET' })//Fazer requisição GET
        .then(()=>fetchProducts());//Atualizar a lista de produtos
    } 
}
//Função para editar um produto
function editProduct(id, name, price, description) {
  document.getElementById('name').value = name;
  document.getElementById('price').value = price;
  document.getElementById('description').value = description;
  
  const form = document.getElementById('productForm');
  form.action = `edit_product.php?id=${id}`;//Mudar o destino do formulário
 }

//Chamar a função para mostrar os produtos carregado na pagina
window.onload = fetchProducts;

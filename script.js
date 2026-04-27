let total = 0;

/* CARRINHO */
function adicionarItem(nome, preco) {
    let lista = document.getElementById("listaPedido");
    let item = document.createElement("li");

    item.textContent = nome + " - R$ " + preco.toFixed(2);
    lista.appendChild(item);

    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarPedido() {
    alert("Pedido finalizado! Total: R$ " + total.toFixed(2));
}

/* CLIENTE */
function abrirCliente() {
    document.getElementById("clienteBox").style.display = "block";
}

function fecharCliente() {
    document.getElementById("clienteBox").style.display = "none";
}

/* SALVAR DADOS */
function salvarCliente() {
    const dados = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value
    };

    localStorage.setItem("cliente", JSON.stringify(dados));
    alert("Dados salvos!");
    fecharCliente();
}

/* CARREGAR DADOS */
window.onload = function() {
    let dados = JSON.parse(localStorage.getItem("cliente"));

    if (dados) {
        document.getElementById("nome").value = dados.nome;
        document.getElementById("telefone").value = dados.telefone;
        document.getElementById("endereco").value = dados.endereco;
    }
}
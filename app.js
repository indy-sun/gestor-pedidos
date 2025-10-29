async function carregarPedidos() {
  try {
    // 🔗 Substitua pela URL do seu endpoint n8n (Webhook público)
    const response = await fetch("https://ingrid-xavier.app.n8n.cloud/webhook-test/pedidos");
    const pedidos = await response.json();

    const tabela = document.querySelector("#pedidosTable tbody");
    tabela.innerHTML = ""; // limpa antes de preencher

    pedidos.forEach(pedido => {
      const linha = `
        <tr>
          <td>${pedido.loja || "—"}</td>
          <td>${pedido.cliente || "—"}</td>
          <td>${pedido.status || "—"}</td>
          <td>${pedido.hora_criacao || "—"}</td>
        </tr>
      `;
      tabela.innerHTML += linha;
    });
  } catch (error) {
    console.error("Erro ao carregar pedidos:", error);
  }
}

// Chama a função para carregar os pedidos ao abrir a página
carregarPedidos();

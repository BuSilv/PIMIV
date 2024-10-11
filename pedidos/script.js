import { show_proveedores } from '../fornecedores/script.js';
window.show_proveedores = show_proveedores; //TODO: arrumar o menu

function show_orders(){
    window.location.href = "pedidos.html";
}

//TODO: api ainda nao ta pronta, mas é a mesma ideia de fornecedores, ajustar quando ficar pronta
const url_get_orders = "http://localhost:8080/skygreen/pedido";

async function get_orders(token) { 

    getData = {
        token: token
    };

    try {
        const response = await fetch(url_get_orders, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getData)
        });

        if (response.ok) {
            console.log("Consulta realizada com sucesso:", response.status);
            return response;
        } else {
            console.log("Falha na consulta:", response.status);
            return response;
        }
    } catch (error) {
        console.error("Erro ao realizar a consulta:", error);
        return response;
    }
}

async function gerarPedidos(pedidos) { //parametro = response da func de cima

    const pedidos = await get_orders(token);

    if (pedidos) {

        const orderContent = document.getElementById('orderContent');
        orderContent.innerHTML = ''; 

        pedidos.forEach(pedido => {

            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order');

            orderDiv.innerHTML = `
                <p><i>Pedido</i> ${pedido.id}</p>
                <p><strong>Cliente:</strong> ${pedido.cliente}</p>
                <p><strong>Produto:</strong> ${pedido.produto}</p>
                <p><strong><i>Prazo de Entrega</i></strong> ${pedido.prazo}</p>
            `;

            orderContent.appendChild(orderDiv);
        });
    } else {
        console.error('Erro ao gerar pedidos:', error);
    }
}

gerarPedidos(pedidos); //TODO: chamar la no html


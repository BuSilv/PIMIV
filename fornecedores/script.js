function show_proveedores_list(){
    window.location.href = "listaFornecedores.html";
}

function show_proveedores(){
    window.location.href = "fornecedores.html";
}

function filterTable() {
    const filter = document.getElementById("statusFilter").value;
    const rows = document.querySelectorAll("#supplierTable tbody tr");

    rows.forEach(row => {
        const status = row.getAttribute("data-status");

        if (filter === "all" || status === filter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


document.getElementById("searchBar").addEventListener("keyup", function () {
    const searchText = this.value.toLowerCase();
    const rows = document.querySelectorAll("#supplierTable tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        if (name.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

//import { show_orders } from '../pedidos/pedidos.js';
//show_orders()
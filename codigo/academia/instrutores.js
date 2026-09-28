document.addEventListener("DOMContentLoaded", function () {

    const lista = document.getElementById("listaInstrutores");

    const modal = document.getElementById("modalInstrutor");

    const formulario = document.getElementById("formInstrutor");

    const novoInstrutor = document.getElementById("novoInstrutor");

    const fecharModal = document.getElementById("fecharModal");

    const cancelar = document.getElementById("cancelar");

    const pesquisa = document.getElementById("pesquisa");

    let instrutores = [
        {
            nome: "João Silva",
            especialidade: "Musculação",
            telefone: "(31) 99999-1111",
            email: "joao@academiapower.com",
            status: "Ativo"
        },
        {
            nome: "Marcos Oliveira",
            especialidade: "Personal Trainer",
            telefone: "(31) 98888-2222",
            email: "marcos@academiapower.com",
            status: "Ativo"
        },
        {
            nome: "Camila Santos",
            especialidade: "Funcional",
            telefone: "(31) 97777-3333",
            email: "camila@academiapower.com",
            status: "Ativo"
        },
        {
            nome: "Fernanda Souza",
            especialidade: "Avaliação Física",
            telefone: "(31) 96666-4444",
            email: "fernanda@academiapower.com",
            status: "Ativo"
        }
    ];


    function atualizarResumo() {

        document.getElementById("totalInstrutores").textContent =
            instrutores.length;

        document.getElementById("instrutoresAtivos").textContent =
            instrutores.filter(
                instrutor => instrutor.status === "Ativo"
            ).length;
    }


    function renderizarInstrutores(listaAtual = instrutores) {

        lista.innerHTML = "";

        if (listaAtual.length === 0) {

            lista.innerHTML = `
                <div class="sem-resultado">
                    Nenhum instrutor encontrado.
                </div>
            `;

            return;
        }


        listaAtual.forEach((instrutor, index) => {

            const iniciais =
                instrutor.nome
                    .split(" ")
                    .slice(0, 2)
                    .map(nome => nome[0])
                    .join("")
                    .toUpperCase();


            const item = document.createElement("div");

            item.className = "instrutor";

            item.innerHTML = `

                <div class="avatar">
                    ${iniciais}
                </div>

                <div class="nome-instrutor">
                    <strong>${instrutor.nome}</strong>
                    <span>${instrutor.especialidade}</span>
                </div>

                <div class="info-instrutor telefone">
                    <i class="fa-solid fa-phone"></i>
                    ${instrutor.telefone}
                </div>

                <div class="info-instrutor email">
                    <i class="fa-regular fa-envelope"></i>
                    ${instrutor.email}
                </div>

                <div>

                    <span class="status ${
                        instrutor.status === "Ativo"
                            ? "status-ativo"
                            : "status-inativo"
                    }">
                        ${instrutor.status}
                    </span>

                </div>

                <div class="acoes">

                    <button
                        type="button"
                        class="btn-editar"
                        title="Editar"
                        data-index="${index}"
                    >
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button
                        type="button"
                        class="btn-excluir"
                        title="Excluir"
                        data-index="${index}"
                    >
                        <i class="fa-regular fa-trash-can"></i>
                    </button>

                </div>
            `;


            lista.appendChild(item);

        });


        configurarAcoes();
    }


    function configurarAcoes() {

        document.querySelectorAll(".btn-excluir").forEach(botao => {

            botao.addEventListener("click", function () {

                const index = Number(this.dataset.index);

                const confirmar = confirm(
                    `Deseja excluir o instrutor ${instrutores[index].nome}?`
                );

                if (confirmar) {

                    instrutores.splice(index, 1);

                    renderizarInstrutores();

                    atualizarResumo();

                    alert("Instrutor excluído com sucesso!");

                }

            });

        });

    }


    novoInstrutor.addEventListener("click", function () {

        formulario.reset();

        modal.classList.add("aberto");

    });


    function fechar() {

        modal.classList.remove("aberto");

    }


    fecharModal.addEventListener("click", fechar);

    cancelar.addEventListener("click", fechar);


    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            fechar();
        }

    });


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const novo = {

            nome: document.getElementById("nome").value,

            especialidade:
                document.getElementById("especialidade").value,

            telefone:
                document.getElementById("telefone").value,

            email:
                document.getElementById("email").value,

            status:
                document.getElementById("status").value

        };


        instrutores.push(novo);

        renderizarInstrutores();

        atualizarResumo();

        formulario.reset();

        fechar();

        alert("Instrutor cadastrado com sucesso!");

    });


    pesquisa.addEventListener("input", function () {

        const termo = this.value.toLowerCase();

        const filtrados = instrutores.filter(instrutor =>

            instrutor.nome.toLowerCase().includes(termo) ||

            instrutor.especialidade.toLowerCase().includes(termo)

        );

        renderizarInstrutores(filtrados);

    });


    renderizarInstrutores();

    atualizarResumo();

});
document.addEventListener("DOMContentLoaded", function () {

    const lista =
        document.getElementById("listaRenovacoes");

    const pesquisa =
        document.getElementById("pesquisa");

    const filtroStatus =
        document.getElementById("filtroStatus");

    const modal =
        document.getElementById("modalContato");


    let renovacoes = [

        {
            nome: "João Silva",
            plano: "Plano Mensal",
            vencimento: "25/09/2026",
            dias: 3,
            telefone: "(31) 99999-1111",
            email: "joao@email.com",
            status: "Urgente"
        },

        {
            nome: "Maria Souza",
            plano: "Plano Standard",
            vencimento: "27/09/2026",
            dias: 5,
            telefone: "(31) 98888-2222",
            email: "maria@email.com",
            status: "Próximo"
        },

        {
            nome: "Carlos Oliveira",
            plano: "Plano Premium",
            vencimento: "29/09/2026",
            dias: 7,
            telefone: "(31) 97777-3333",
            email: "carlos@email.com",
            status: "Próximo"
        },

        {
            nome: "Ana Santos",
            plano: "Plano Basic",
            vencimento: "20/09/2026",
            dias: -2,
            telefone: "(31) 96666-4444",
            email: "ana@email.com",
            status: "Vencido"
        }

    ];


    function atualizarResumo() {

        const pendentes =
            renovacoes.filter(
                item => item.status !== "Vencido"
            ).length;


        const vencidos =
            renovacoes.filter(
                item => item.status === "Vencido"
            ).length;


        document.getElementById(
            "totalPendentes"
        ).textContent = pendentes;


        document.getElementById(
            "contadorTopo"
        ).textContent = pendentes;


        document.getElementById(
            "totalVencidos"
        ).textContent = vencidos;

    }


    function obterIniciais(nome) {

        return nome
            .split(" ")
            .slice(0, 2)
            .map(parte => parte[0])
            .join("")
            .toUpperCase();

    }


    function renderizar(listaAtual = renovacoes) {

        lista.innerHTML = "";


        if (listaAtual.length === 0) {

            lista.innerHTML = `

                <div class="sem-resultado">

                    Nenhuma renovação encontrada.

                </div>

            `;

            return;

        }


        listaAtual.forEach(item => {

            const index =
                renovacoes.indexOf(item);


            const elemento =
                document.createElement("div");


            elemento.className =
                "renovacao";


            let textoDias = "";


            if (item.status === "Vencido") {

                textoDias =
                    `Vencido há ${Math.abs(item.dias)} dias`;

            } else {

                textoDias =
                    `${item.dias} dias restantes`;

            }


            let classeStatus = "";


            if (item.status === "Urgente") {

                classeStatus =
                    "status-urgente";

            } else if (item.status === "Próximo") {

                classeStatus =
                    "status-proximo";

            } else {

                classeStatus =
                    "status-vencido";

            }


            elemento.innerHTML = `

                <div class="aluno">

                    <div class="avatar">

                        ${obterIniciais(item.nome)}

                    </div>

                    <div>

                        <strong>
                            ${item.nome}
                        </strong>

                        <span>
                            Cliente ativo
                        </span>

                    </div>

                </div>


                <div class="plano">

                    <strong>
                        ${item.plano}
                    </strong>

                    <span>
                        Plano contratado
                    </span>

                </div>


                <div class="vencimento">

                    <strong>
                        ${item.vencimento}
                    </strong>

                    <span>
                        ${textoDias}
                    </span>

                </div>


                <div class="contato">

                    <div>

                        <i class="fa-solid fa-phone"></i>

                        ${item.telefone}

                    </div>

                    <div>

                        <i class="fa-regular fa-envelope"></i>

                        ${item.email}

                    </div>

                </div>


                <div>

                    <span class="status ${classeStatus}">

                        ${item.status}

                    </span>

                </div>


                <div class="acoes">

                    <button
                        type="button"
                        class="btn-contato"
                        data-index="${index}"
                    >

                        <i class="fa-solid fa-phone"></i>

                        Contatar

                    </button>


                    <button
                        type="button"
                        class="btn-renovar"
                        data-index="${index}"
                    >

                        <i class="fa-solid fa-rotate"></i>

                        Renovar

                    </button>

                </div>

            `;


            lista.appendChild(elemento);

        });


        configurarBotoes();

    }


    function configurarBotoes() {


        document
            .querySelectorAll(".btn-contato")
            .forEach(botao => {

                botao.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(this.dataset.index);

                        abrirContato(
                            renovacoes[index]
                        );

                    }
                );

            });


        document
            .querySelectorAll(".btn-renovar")
            .forEach(botao => {

                botao.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(this.dataset.index);

                        const aluno =
                            renovacoes[index];


                        const confirmar =
                            confirm(
                                `Confirmar renovação do plano de ${aluno.nome}?`
                            );


                        if (confirmar) {

                            renovacoes.splice(
                                index,
                                1
                            );


                            atualizarResumo();

                            aplicarFiltros();


                            const realizadas =
                                document.getElementById(
                                    "totalRealizadas"
                                );


                            realizadas.textContent =
                                Number(
                                    realizadas.textContent
                                ) + 1;


                            alert(
                                "Renovação registrada com sucesso!"
                            );

                        }

                    }
                );

            });

    }


    function abrirContato(aluno) {

        document.getElementById(
            "nomeContato"
        ).textContent = aluno.nome;


        document.getElementById(
            "planoContato"
        ).textContent = aluno.plano;


        document.getElementById(
            "telefoneContato"
        ).textContent = aluno.telefone;


        document.getElementById(
            "emailContato"
        ).textContent = aluno.email;


        document.getElementById(
            "avatarContato"
        ).textContent = obterIniciais(
            aluno.nome
        );


        document.getElementById(
            "btnTelefone"
        ).onclick = function () {

            window.location.href =
                `tel:${aluno.telefone}`;

        };


        document.getElementById(
            "btnEmail"
        ).onclick = function () {

            window.location.href =
                `mailto:${aluno.email}`;

        };


        modal.classList.add("aberto");

    }


    function aplicarFiltros() {

        const termo =
            pesquisa.value.toLowerCase();


        const status =
            filtroStatus.value;


        const filtrados =
            renovacoes.filter(item => {

                const correspondeNome =
                    item.nome
                        .toLowerCase()
                        .includes(termo);


                const correspondeStatus =
                    status === "" ||
                    item.status === status;


                return correspondeNome &&
                       correspondeStatus;

            });


        renderizar(filtrados);

    }


    pesquisa.addEventListener(
        "input",
        aplicarFiltros
    );


    filtroStatus.addEventListener(
        "change",
        aplicarFiltros
    );


    document
        .getElementById("fecharModal")
        .addEventListener(
            "click",
            function () {

                modal.classList.remove(
                    "aberto"
                );

            }
        );


    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                modal.classList.remove(
                    "aberto"
                );

            }

        }
    );


    atualizarResumo();

    renderizar();

});
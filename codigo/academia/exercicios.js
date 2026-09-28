document.addEventListener("DOMContentLoaded", function () {

    const lista = document.getElementById("listaExercicios");

    const pesquisa = document.getElementById("pesquisa");

    const filtroGrupo = document.getElementById("filtroGrupo");

    const modal = document.getElementById("modalExercicio");

    const formulario = document.getElementById("formExercicio");


    let exercicios = [

        {
            nome: "Supino Reto",
            grupo: "Peito",
            equipamento: "Barra",
            status: "Ativo"
        },

        {
            nome: "Supino Inclinado",
            grupo: "Peito",
            equipamento: "Halteres",
            status: "Ativo"
        },

        {
            nome: "Agachamento",
            grupo: "Pernas",
            equipamento: "Barra",
            status: "Ativo"
        },

        {
            nome: "Leg Press",
            grupo: "Pernas",
            equipamento: "Máquina",
            status: "Ativo"
        },

        {
            nome: "Puxada Frontal",
            grupo: "Costas",
            equipamento: "Máquina",
            status: "Ativo"
        },

        {
            nome: "Remada Baixa",
            grupo: "Costas",
            equipamento: "Cabo",
            status: "Ativo"
        },

        {
            nome: "Rosca Direta",
            grupo: "Bíceps",
            equipamento: "Barra",
            status: "Ativo"
        },

        {
            nome: "Tríceps Pulley",
            grupo: "Tríceps",
            equipamento: "Cabo",
            status: "Ativo"
        },

        {
            nome: "Elevação Lateral",
            grupo: "Ombros",
            equipamento: "Halteres",
            status: "Ativo"
        },

        {
            nome: "Abdominal",
            grupo: "Abdômen",
            equipamento: "Colchonete",
            status: "Ativo"
        }

    ];


    function atualizarResumo() {

        document.getElementById("totalExercicios").textContent =
            exercicios.length;

        document.getElementById("exerciciosAtivos").textContent =
            exercicios.filter(
                exercicio => exercicio.status === "Ativo"
            ).length;

    }


    function renderizar(listaAtual = exercicios) {

        lista.innerHTML = "";


        if (listaAtual.length === 0) {

            lista.innerHTML = `
                <div class="sem-resultado">
                    Nenhum exercício encontrado.
                </div>
            `;

            return;
        }


        listaAtual.forEach(exercicio => {

            const index =
                exercicios.indexOf(exercicio);


            const item =
                document.createElement("div");

            item.className = "exercicio";


            item.innerHTML = `

                <div>
                    <strong>
                        ${exercicio.nome}
                    </strong>
                </div>

                <div class="grupo">
                    ${exercicio.grupo}
                </div>

                <div class="equipamento">
                    ${exercicio.equipamento}
                </div>

                <div>

                    <span class="status ${
                        exercicio.status === "Ativo"
                            ? "ativo"
                            : "inativo"
                    }">
                        ${exercicio.status}
                    </span>

                </div>

                <div>

                    <button
                        class="btn-excluir"
                        type="button"
                        data-index="${index}"
                    >
                        <i class="fa-regular fa-trash-can"></i>
                    </button>

                </div>

            `;


            lista.appendChild(item);

        });


        document.querySelectorAll(".btn-excluir")
            .forEach(botao => {

                botao.addEventListener("click", function () {

                    const index =
                        Number(this.dataset.index);


                    const confirmar = confirm(
                        `Deseja excluir o exercício "${exercicios[index].nome}"?`
                    );


                    if (confirmar) {

                        exercicios.splice(index, 1);

                        atualizarResumo();

                        aplicarFiltros();

                        alert(
                            "Exercício excluído com sucesso!"
                        );

                    }

                });

            });

    }


    function aplicarFiltros() {

        const termo =
            pesquisa.value.toLowerCase();

        const grupo =
            filtroGrupo.value;


        const filtrados =
            exercicios.filter(exercicio => {

                const correspondeNome =
                    exercicio.nome
                        .toLowerCase()
                        .includes(termo);

                const correspondeGrupo =
                    grupo === "" ||
                    exercicio.grupo === grupo;


                return correspondeNome &&
                       correspondeGrupo;

            });


        renderizar(filtrados);

    }


    pesquisa.addEventListener(
        "input",
        aplicarFiltros
    );


    filtroGrupo.addEventListener(
        "change",
        aplicarFiltros
    );


    document
        .getElementById("novoExercicio")
        .addEventListener("click", function () {

            formulario.reset();

            modal.classList.add("aberto");

        });


    function fecharModal() {

        modal.classList.remove("aberto");

    }


    document
        .getElementById("fecharModal")
        .addEventListener(
            "click",
            fecharModal
        );


    document
        .getElementById("cancelar")
        .addEventListener(
            "click",
            fecharModal
        );


    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {
                fecharModal();
            }

        }
    );


    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            exercicios.push({

                nome:
                    document.getElementById("nome").value,

                grupo:
                    document.getElementById("grupo").value,

                equipamento:
                    document.getElementById("equipamento").value,

                status:
                    document.getElementById("status").value

            });


            atualizarResumo();

            aplicarFiltros();

            fecharModal();

            formulario.reset();


            alert(
                "Exercício cadastrado com sucesso!"
            );

        }
    );


    renderizar();

    atualizarResumo();

});
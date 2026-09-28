const formTreino = document.getElementById("formTreino");

const adicionarExercicio =
    document.getElementById("adicionarExercicio");

const listaExercicios =
    document.getElementById("listaExercicios");


// =========================
// ADICIONAR EXERCÍCIO
// =========================

adicionarExercicio.addEventListener("click", function () {

    const exercicio =
        document.getElementById("exercicio").value;

    const series =
        document.getElementById("series").value;

    const repeticoes =
        document.getElementById("repeticoes").value;

    const carga =
        document.getElementById("carga").value;


    // Verifica os campos

    if (
        exercicio === "" ||
        series === "" ||
        repeticoes === ""
    ) {

        alert("Preencha o exercício, séries e repetições.");

        return;

    }


    // Remove a mensagem inicial

    const mensagem =
        document.querySelector(".sem-exercicios");

    if (mensagem) {

        mensagem.remove();

    }


    // Cria o exercício

    const item =
        document.createElement("div");

    item.classList.add("exercicio-item");


    item.innerHTML = `

        <div class="exercicio-nome">
            ${exercicio}
        </div>

        <div class="exercicio-detalhes">
            ${series} séries
        </div>

        <div class="exercicio-detalhes">
            ${repeticoes} repetições
        </div>

        <div class="exercicio-detalhes">
            ${carga || "0"} kg
        </div>

        <button
            type="button"
            class="btn-remover"
        >
            Remover
        </button>

    `;


    // Adiciona na lista

    listaExercicios.appendChild(item);


    // =========================
    // REMOVER EXERCÍCIO
    // =========================

    const botaoRemover =
        item.querySelector(".btn-remover");


    botaoRemover.addEventListener("click", function () {

        item.remove();


        // Se não houver exercícios,
        // mostra a mensagem novamente

        if (listaExercicios.children.length === 0) {

            listaExercicios.innerHTML = `

                <div class="sem-exercicios">
                    Nenhum exercício adicionado.
                </div>

            `;

        }

    });


    // Limpa os campos

    document.getElementById("exercicio").value = "";

    document.getElementById("series").value = "";

    document.getElementById("repeticoes").value = "";

    document.getElementById("carga").value = "";

});



// =========================
// SALVAR TREINO
// =========================

formTreino.addEventListener("submit", function (event) {

    event.preventDefault();


    const exercicios =
        document.querySelectorAll(".exercicio-item");


    // Verifica se existe exercício

    if (exercicios.length === 0) {

        alert("Adicione pelo menos um exercício.");

        return;

    }


    alert("Treino cadastrado com sucesso!");


    // Limpa o formulário

    formTreino.reset();


    // Limpa a lista

    listaExercicios.innerHTML = `

        <div class="sem-exercicios">
            Nenhum exercício adicionado.
        </div>

    `;

});



// =========================
// CANCELAR
// =========================

const cancelar =
    document.getElementById("cancelar");


cancelar.addEventListener("click", function () {

    const confirmar =
        confirm("Deseja cancelar o cadastro do treino?");


    if (confirmar) {

        window.location.href = "cadastro.html";

    }

});
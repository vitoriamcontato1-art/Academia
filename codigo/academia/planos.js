document.addEventListener("DOMContentLoaded", () => {

    const planos = [

        {
            nome: "Plano Basic",
            descricao: "Acesso completo à academia",
            duracao: "1 mês",
            valor: "R$ 99,90",
            status: "Ativo",
            icone: "fa-regular fa-star",
            cor: "#FFE6D8"
        },

        {
            nome: "Plano Standard",
            descricao: "Acesso completo + avaliação física",
            duracao: "3 meses",
            valor: "R$ 269,90",
            status: "Ativo",
            icone: "fa-regular fa-gem",
            cor: "#DDEEFF"
        },

        {
            nome: "Plano Premium",
            descricao: "Acesso completo + acompanhamento",
            duracao: "6 meses",
            valor: "R$ 499,90",
            status: "Ativo",
            icone: "fa-solid fa-gem",
            cor: "#DFF8E2"
        },

        {
            nome: "Plano Anual",
            descricao: "Acesso completo por 12 meses",
            duracao: "12 meses",
            valor: "R$ 899,90",
            status: "Ativo",
            icone: "fa-solid fa-trophy",
            cor: "#EEE0FF"
        },

        {
            nome: "Plano Day Pass",
            descricao: "Acesso por 1 dia",
            duracao: "1 dia",
            valor: "R$ 29,90",
            status: "Inativo",
            icone: "fa-solid fa-bolt",
            cor: "#FFF2CC"
        }

    ];


    const lista = document.getElementById("listaPlanos");


    planos.forEach(plano => {

        const linha = document.createElement("div");

        linha.className = "linha";


        linha.innerHTML = `

            <div
                class="icone"
                style="background-color: ${plano.cor};"
            >
                <i class="${plano.icone}"></i>
            </div>


            <div class="info">

                <h3>${plano.nome}</h3>

                <p>${plano.descricao}</p>

            </div>


            <div>
                ${plano.duracao}
            </div>


            <div>
                ${plano.valor}
            </div>


            <div>

                <span
                    class="status ${
                        plano.status === "Ativo"
                            ? "status-ativo"
                            : "status-inativo"
                    }"
                >
                    ${plano.status}
                </span>

            </div>


            <div class="acoes">

                <button class="btn-ver">

                    <i class="fa-regular fa-eye"></i>

                    Ver

                </button>


                <button class="btn-excluir">

                    <i class="fa-regular fa-trash-can"></i>

                    Excluir

                </button>

            </div>

        `;


        lista.appendChild(linha);

    });

});

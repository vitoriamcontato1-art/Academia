// =========================
// MÁSCARA DO CPF
// =========================

document
    .getElementById("cpf")
    .addEventListener("input", function () {

        let valor = this.value
            .replace(/\D/g, "")
            .slice(0, 11);


        if (valor.length > 9) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                "$1.$2.$3-$4"
            );

        }

        else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{1,3})/,
                "$1.$2.$3"
            );

        }

        else if (valor.length > 3) {

            valor = valor.replace(
                /(\d{3})(\d{1,3})/,
                "$1.$2"
            );

        }


        this.value = valor;

    });



// =========================
// MÁSCARA DO TELEFONE
// =========================

document
    .getElementById("telefone")
    .addEventListener("input", function () {

        let valor = this.value
            .replace(/\D/g, "")
            .slice(0, 11);


        if (valor.length > 10) {

            valor = valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );

        }

        else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{2})(\d{4})(\d{1,4})/,
                "($1) $2-$3"
            );

        }

        else if (valor.length > 2) {

            valor = valor.replace(
                /(\d{2})(\d{1,5})/,
                "($1) $2"
            );

        }


        this.value = valor;

    });



// =========================
// FORMULÁRIO
// =========================

const formulario =
    document.getElementById("formCadastro");



// =========================
// SALVAR CADASTRO
// =========================

formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const aluno = {

            nome:
                document
                .getElementById("nome")
                .value,

            nascimento:
                document
                .getElementById("nascimento")
                .value,

            cpf:
                document
                .getElementById("cpf")
                .value,

            telefone:
                document
                .getElementById("telefone")
                .value,

            email:
                document
                .getElementById("email")
                .value,

            plano:
                document
                .getElementById("plano")
                .value,

            inicio:
                document
                .getElementById("inicio")
                .value,

            professor:
                document
                .getElementById("professor")
                .value,

            pagamento:
                document
                .getElementById("pagamento")
                .value,

            observacoes:
                document
                .getElementById("observacoes")
                .value

        };


        // Salva os dados no navegador

        localStorage.setItem(
            "alunoCadastrado",
            JSON.stringify(aluno)
        );


        alert(
            "Aluno cadastrado com sucesso!"
        );


        formulario.reset();

    });



// =========================
// BOTÃO CANCELAR
// =========================

document
    .getElementById("cancelar")
    .addEventListener("click", function () {


        const confirmar =
            confirm(
                "Deseja cancelar o cadastro?"
            );


        if (confirmar) {

            formulario.reset();

        }

    });
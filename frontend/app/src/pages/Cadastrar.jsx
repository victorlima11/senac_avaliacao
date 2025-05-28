export function Cadastrar(){

    const submitHandler = (e) => {
        e.preventDefault()
        const nome = document.getElementById("nome")
        const senha = document.getElementById("senha")
        const email = document.getElementById("email")
        const contato = document.getElementById("nome")

        const url = "http://localhost:3333/cadastrar_cliente"
        const response = fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome: nome, senha: senha, email: email, contato: contato, tipo: "cliente" }),
        })
        const json = response.json()
        alert(json.JSON.stringify())
    }
    return(
        <div className="container">
            <form action={submitHandler}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <label htmlFor="senha">Senha</label>
                <input id="password" type="password" />
                <label htmlFor="contato">Contato</label>
                <input id="numero" type="number" />
                <button onClick={submitHandler}>Cadastrar</button>
                <button>Já tem uma conta?</button>
            </form>
        </div>
    )
}
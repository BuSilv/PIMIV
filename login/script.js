function login_submit(){

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        do_login(user, password).then(success => {
            if (success) {
                alert("Login realizado com sucesso!"); 
                console.log("Login realizado com sucesso!");
                newpage(); 
            } else {
                console.log("Login falhou.");
                alert("Usuário ou senha inválida. Por favor, tente novamente."); 
            }
        });

    });

}

function forgotPassword() {

    const email = prompt("Por favor, insira seu e-mail para recuperar a senha:");

    if (email) {
        alert(`Um link de recuperação de senha foi enviado para: ${email}`);
    } else {
        alert("Você precisa inserir um e-mail válido para recuperar a senha.");
    }
}

const urlLogin = "http://localhost:8080/skygreen/auth/login";

async function do_login(cpf, senha) {

    loginData = {
        cpf: cpf, 
        senha: senha
    };

    try {
        const response = await fetch(urlLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const token = await response.text();

        if (response.ok) {
            console.log("Login realizado com sucesso:", response.status);
            return { success: true, token: token };
        } else {
            console.log("Falha no login:", response.status);
            return { success: false, token: null };
        }
    } catch (error) {
        console.error("Erro ao realizar o login:", error);
        return { success: false, token: null };
    }
}




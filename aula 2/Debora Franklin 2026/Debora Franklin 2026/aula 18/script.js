const formlogin = document.getElementById("formLogin");
if (formLogin) {
    formlogin.addEventListener("submit" ,function (event){
        event.preventDefault();
        const usuario = document.getElementById("usuario").Value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem");
        if(usuario==="admin" && senha === "1234") {
            mensagem.textContent = "login realizado!";
            mensagem.style.color = "green";

            window.location.href = "interno.html";
        }
else{
    mensagem.textContent = "usuario ou senha incorretos.";
    mensagem.style.color = "red";
}
    })
}
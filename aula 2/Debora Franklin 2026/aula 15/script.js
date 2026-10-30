function calcularMedia() {
    let textoResultado = document.getElementById("resultado");
let nota1 = Number(document.getElementById("media1").value)
let nota2 = Number(document.getElementById("media2").value)
let nota3 = Number(document.getElementById("media3").value)
let nota4 = Number(document.getElementById("media4").value)
let media = (nota1 + nota2 + nota3 + nota4) / 4
//  alert(media)
if (media >= 7) {
    textoResultado.innerText ="Parabéns! Menos um para encher meu saco em janeiro.👌";
}
else{
    textoResultado.innerText = " pronto, outro estripício para me atasanar em janeiro.😤"
}

}

































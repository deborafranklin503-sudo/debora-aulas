// let Reiki = ["Energy boost","Memory boost","Produtivity","Studiyng","Money","Impossible"];
// let variavel = 0
// console.log(variavel)
// console.log(frutas[0]);
// console.log(frutas[1]);

function adicionarVideo() {
    const listaVideos = document.getElementById('listaVideos');
    const input = document.getElementById('reikiInput');
    const valorVideo = input.value;
    if (valorVideo.trim() === ""){
    alert("Digite um vídeo válido!");
    return;
}
const novoVideo = document.createElement('li');
novoVideo.textContent =valorVideo;
listaVideos.appendChild(novoVideo);
input.value ='';
}




















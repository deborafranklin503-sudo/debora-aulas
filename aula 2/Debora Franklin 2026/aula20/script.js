// function verificarValor(){
//     const numero = parseFloat(valorInput);
//     const campoResultado= document.getElementById('resultado');

// if( numero >0){
//     campoResultado.innerhtml = `<h1>0 `
// }
// else if( numero <0){
//     textoResultado.innerhtml = "Negativo";
// }
// else(numero === 0){
//     textoResultado.innerText = "Neutro";
// }
// }


function analizarClima() {
    const txtInput =document.getElementById('tempImput').value;
    const temp =parseFloat(txtInput);
    const output=document.getElementById('output');
   
    const imgClima=document.getElementById('fotoClima');

    (txtInput==="") {
        output.innerHTML ="por favor,insira uma temperatura válida.";
        return;
    }
if(temp<0){
    output.innerHTML.html = "Clima:congelante. Prefira: Casaco térmicos de preferência com capuz, luvas,touca,botas ou sapatos bem fechados.";
    imgClima.src=https://www.carpemundi.com.br/o-que-vestir-para-ver-a-aurora-boreal/;
}
else if(temp<=14){
    output.innerHTML.html = "Clima:Frio. Prefira: Casacos grossos e calças.";
    imgClima.src=https://blog.damyller.com.br/moda-feminina/look-de-frio/;
}
else if(temp<=24) {
    output.innerHTML.html="Clima:Agradável. Prefira:Roupas leves para o dia e casacos leves para a noite.";
    imgClima.src=https://produto.mercadolivre.com.br/MLB-4803662306-kit-frio-conjunto-termico-segunda-pele-felpada-blusa-calca-_JM;
}
else{
    output.innerHTML.html="Clima:Quente.Prefira:Roupas abertas ou roupas de banho,óculos de sol,chapéu e protetor solar."
    imgClima.src=https://www.boutiquehibisco.com.br/blog/estampas-tropicais-como-usar-cores-e-padroes-sem-errar-no-look/;
}
}










    if(numero>34° ){
        campoResultado.innerhtml = `<h1> A temperatura é ${numero} é alta🔥.</h1>`;
        campoResultado.style.color="red"
    }
    else if(numero===34°){
        campoResultado.innerthtml=`<h1>A temperatura é ${numero} é alta 🔥.</h1>`;
        campoResultado.style.color="red"
    }
    else if(numero)


























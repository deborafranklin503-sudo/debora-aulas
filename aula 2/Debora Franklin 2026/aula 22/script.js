function executarFor(){
    const listaFor = document.getElementById('listaFor');
    listaFor.innerText = "";
      for (let dias =5; dias>=1; dias --){
      const item = document.createElement('li');
      item.innerText=`faltam ${dias} dias para a viagem! ✈️`;
      listaFor.appendChild(item); 
    }
    const itemFinal = document.createElement('li');
    itemFinal.innerhtml ="<strong>Chegou o dia! Decolando!🛫</strong>";
    listaFor.appendChild(itemFinal);
}
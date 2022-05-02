let balanco = 0;
let totalDespesas = 0;
let totalGanhos = 0;

function adicionarDespesa() 
{
  let descricao = document.getElementById('despesa').value;
  let valor = document.getElementById('valor-despesa').value;

  totalDespesas += parseFloat(valor);

  let tbodyRef = document.getElementById('table-despesas')
  .getElementsByTagName('tbody')[0];

  var newRow = tbodyRef.insertRow();

  let cell1 = newRow.insertCell(0);
  descricao = document.createTextNode(descricao);
  cell1.appendChild(descricao);


  let cell2 = newRow.insertCell(1);
  valor = document.createTextNode(valor);
  cell2.appendChild(valor);

  atualizarBalanco();
  
  document.getElementById('despesa').value = "";
  document.getElementById('valor-despesa').value = "";
  document.getElementById('total-despesas').innerHTML = totalDespesas;
}

function adicionarGanho() 
{
  let descricao = document.getElementById('ganho').value;
  let valor = document.getElementById('valor-ganho').value;

  totalGanhos += parseFloat(valor);

  let tbodyRef = document.getElementById('table-ganhos')
  .getElementsByTagName('tbody')[0];

  var newRow = tbodyRef.insertRow();

  let cell1 = newRow.insertCell(0);
  descricao = document.createTextNode(descricao);
  cell1.appendChild(descricao);


  let cell2 = newRow.insertCell(1);
  valor = document.createTextNode(valor);
  cell2.appendChild(valor);

  atualizarBalanco();
  
  document.getElementById('ganho').value = "";
  document.getElementById('valor-ganho').value = "";
  document.getElementById('total-ganhos').innerHTML = totalGanhos;

}

function atualizarBalanco()
{
  balanco = totalGanhos - totalDespesas;
  console.table({totalGanhos,totalDespesas,balanco});
  document.getElementById('balance').value = balanco;
}
window.onload=inicio ;

function inicio(){
  document.getElementById('buton').onclick=action;
}

function action(){
  
  document.getElementById('parafo').innerHTML=`Bonjour mon ami!`;
  let nombre = 'Sabian';
  let apellido = 'Sanchez'
  let num1 = 23;
  let num2 = 10;
  resultado = num1 + num2;

  document.write(`mi resultado es : <b>${resultado}</b>`  +'<br>')
  document.write(`Me llamo: ${nombre} ${apellido}`);
}
window.onload=inicio ;

function inicio(){
  document.getElementById('buton').onclick=action;
}

function action(){
  
  document.getElementById('parafo').innerHTML=`Bonjour mon ami!`;
  let nombre = 'Sabian';
  let apellido = 'Sanchez'
  document.write(`Me llamo: ${nombre} ${apellido}`)
}
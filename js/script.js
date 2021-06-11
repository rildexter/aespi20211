//variaveis iniciadas
var min, seg;		min = 3;		seg = 1	
//função cronometro
function relogio(){	
    min = document.getElementById("numb").value;
  
	  if((min > 0) || (seg > 0)){				
    if(seg == 0){					
      seg = 59;					
      min = min - 1	}				
    else{					
      seg = seg - 1;				
    }				
    if(min.toString().length == 1){					
      min = "0" + min;				
    }				
    if(seg.toString().length == 1){					
      seg = "0" + seg;				
    }				
    document.getElementById('spanRelogio').innerHTML = min + ":" + seg;				
    setTimeout('relogio()', 1000);			
  }			
  else{				
    document.getElementById('spanRelogio').innerHTML = "00:00";			 }		
}
//objetos de janela
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
//abre nova janela
  function openWin() {
    window.open("./img/carl.jpg",
    "_blank","  width=400, height=400");
  }
  //tecla pressionada
  function teclado() {
    alert("Apertou uma tecla!");
  }
   //clicando com mouse
    function mouse() {
      alert("Clicou no mouse!");
    }
  //imprime tela
  function printPage() {
    window.print();
  }
// objeto de localização
//botão voltar
  function newDoc() {
    window.location.assign("./index.html")
  }
  function goBack() {
    window.history.back()
  }
  //botão avancar
  function goForward() {
    window.history.forward()
  }
  //tempo
  function myTime() {
    alert('Esperou 3 segundos!');
  }
 //datas 
function myDateTime(){
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("demo").innerHTML = dataAtual;
}

function dataTarefa(){
  const d = new Date();
  document.getElementById("demo2").innerHTML = d;
  
}
function carregar()
{
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas  ${minuto} minutos e  ${segundo}  segundos`

    //evento reload() poderia ser usado para atualizar a tela

}
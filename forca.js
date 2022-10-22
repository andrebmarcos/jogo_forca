//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "PROGRAMADOR", "LOGICA", "FRONTAND"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let novaPalavraSecreta = document.getElementById('salvar-iniciar');
let inputPalavra = document.querySelector("#input-nova-palavra");
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let letras = [];
let teclaAdic = "";
let erros = 8;
let resultado = "";


function addNovaPalavra(){

	if(inputPalavra.value==""){
		iniciarJogo();
		}
		else if (palavras.includes(inputPalavra.value.toUpperCase())){
		document.querySelector("#input-nova-palavra").value="";
		iniciarJogo();
			}
			else{
				palavras.push(inputPalavra.value.toUpperCase());
    			document.querySelector("#input-nova-palavra").value="";
    			console.log(palavras);
    			iniciarJogo();
    			}  			  
}

function escolherPalavraSecreta(){
	let palavra = palavras[Math.floor(Math.random() * palavras.length)];
	palavraSecreta = palavra;
	console.log(palavraSecreta);	
}

	
function adcionarletraIncorreta(){
	erros -= 1;
	
	if(erros == 7){
		desenhaForca();
		} 
	if(erros == 6){ 
		desenhaCabeca()
		}
	if(erros == 5){ 
		desenhaCorpo()
		}	
	if(erros == 4){ 
		desenhaBracoD()
		}
	if(erros == 3){ 
		desenhaBracoE()
		}		
	if(erros == 2){ 
		desenhaPernaD()
		}
	if(erros == 1){ 
		desenhaPernaE()
		}
	if(erros == 0){ 
		cabecaEnforcada()
		resultado = "PERDEU!!!"
	}	
}

function novaPalavra() {
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "block";
}

function recarregar(){
	document.getElementById('div-aparece-forca').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-desaparece').style.display = "block";
	document.onkeydown = 'none';	
}

function iniciarJogo(){
	document.getElementById('div-desaparece').style.display = "none";
	document.getElementById('caixa-nova-palavra').style.display = "none";
	document.getElementById('div-aparece-forca').style.display = "block";
	teclaAdic = ""
	letras = []
	erros = 8;
	acertos = []
	escolherPalavraSecreta();
	desenharCanvas();
	desenharLinhas();
	resultado = "";
	
	document.onkeydown = teclaClicada	
}

function teclaClicada(e){
	teclaAdic = e.key.toUpperCase();
	verificaFimDeJogo()
	if(letras.includes(teclaAdic)){
		return teclaAdic
	} 
		if(alfabeto.includes(teclaAdic) && palavraSecreta.includes(teclaAdic) ){
					letras.push(teclaAdic);
					var quantidade = 0	
						for (var i = 0; i < palavraSecreta.length; i++) {
  						if (palavraSecreta[i] == teclaAdic) {
							escreverLetraCorreta(i)								
								quantidade++							
  							}
						}
						if(quantidade == 1){
							acertos ++	
						} 
							else{ acertos = quantidade + acertos
							}
						if (acertos == palavraSecreta.length){
							winner ()
							resultado = "VENCEU!!!"	
						}
			return teclaAdic;
		}
			else if(alfabeto.includes(teclaAdic)){
					letras.push(teclaAdic)
					console.log(letras)
					adcionarletraIncorreta(teclaAdic);
					escreverLetraIncorreta(teclaAdic, erros);				
			}
}

function verificaFimDeJogo(){
	if (resultado != ""){
		document.onkeydown = 'none';
		teclaAdic = ""
		alert("FIM DE JOGO VOCÊ")
		alert(resultado)
	}
}


recarregar();
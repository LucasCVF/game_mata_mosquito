var altura = 0
var largura = 0
var vidas = 1 
var tempo = 15
var dificuldadeGame = 1500

var	nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500 milisegundos
	dificuldadeGame = 1500
} else if (nivel === 'dificil'){
	//1000 milisegundos
	dificuldadeGame = 1000
}else if (nivel === 'pikadasgalaxias'){
	//750 milisegundos
	dificuldadeGame = 750
}

function ajutaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)	
}

ajutaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)	

	//Criando elemsntos HTML
	var mosquito = document.createElement('img')
	mosquito.src = imagemAleatoria()
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position ='absolute'
	mosquito.id = 'mosquito'
	document.body.appendChild(mosquito)
	mosquito.onclick = function(){
		this.remove()
	}
}

function imagemAleatoria(){

var imagem = Math.floor(Math.random() * 3)

	switch(imagem){

		case 0: 
			return 'imagens/mosquito.png'

		case 1: 
			return 'imagens/mosquito2.png'

		case 2: 
			return 'imagens/mosquito3.png'		
	}
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0: 
			return 'mosquito1'

		case 1: 
			return 'mosquito2'

		case 2: 
			return 'mosquito3'		
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0: 
			return 'ladoA'

		case 1: 
			return 'ladoB'
	}
}
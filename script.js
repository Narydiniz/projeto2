//===============VARIAVEIS--GLOBAIS===================
var suplementos = document.getElementById('suplemento')
var alimento = document.getElementById('alimentos')
var belezas = document.querySelector('div#beleza')
var relaxamentos = document.getElementById('relaxamento')
var vitaminas = document.querySelector('div#vitaminas')
var carrinho = document.getElementById('cart')
var compras = document.getElementById('compras')
var infoCart = document.getElementsByClassName('main-cart-container-sumir')[0]
var nav = document.getElementsByClassName('navegacao')[0]


//============VARIAVEIS DOS BOTÕES=================
var buttonT = document.getElementById('button-products-navT')
var buttonS = document.getElementById('button-products-navS')
var buttonA = document.getElementById('button-products-navA')
var buttonR = document.getElementById('button-products-navR')
var buttonB = document.getElementById('button-products-navB')


//=======FUNÇÕES SUMIR/APARECER PRODUTOS E BOTÕES======


//=====FUNÇÃO -> BOTÃO DE SUPLEMENTO=====
function clicarS(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    infoCart.style.display = 'none'
    buttonS.style.background = '#2c3a0f'
    buttonS.style.color = 'white'
    buttonT.style.color = 'black'
    buttonB.style.color = 'black'
    buttonR.style.color = 'black'
    buttonA.style.color = 'black'
    buttonT.style.background = 'white'
    buttonB.style.background = 'white'
    buttonR.style.background = 'white'
    buttonA.style.background = 'white'
}

//=====FUNÇÃO -> BOTÃO DE ALIMENTOS=====
function clicarA(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    buttonA.style.background = '#2c3a0f'
    buttonA.style.color = 'white'
    buttonT.style.color = 'black'
    buttonB.style.color = 'black'
    buttonR.style.color = 'black'
    buttonS.style.color = 'black'
    buttonT.style.background = 'white'
    buttonB.style.background = 'white'
    buttonR.style.background = 'white'
    buttonS.style.background = 'white'
}

//=====FUNÇÃO -> BOTÃO DE RELAXAMENTO=====
function clicarR(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    buttonR.style.background = '#2c3a0f'
    buttonR.style.color = 'white'
    buttonT.style.color = 'black'
    buttonB.style.color = 'black'
    buttonA.style.color = 'black'
    buttonS.style.color = 'black'
    buttonT.style.background = 'white'
    buttonB.style.background = 'white'
    buttonA.style.background = 'white'
    buttonS.style.background = 'white'
}

//=====FUNÇÃO -> BOTÃO DE BELEZA=====
function clicarB(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'block'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    buttonB.style.background = '#2c3a0f'
    buttonB.style.color = 'white'
    buttonT.style.color = 'black'
    buttonR.style.color = 'black'
    buttonA.style.color = 'black'
    buttonS.style.color = 'black'
    buttonT.style.background = 'white'
    buttonR.style.background = 'white'
    buttonA.style.background = 'white'
    buttonS.style.background = 'white'
}

//=====FUNÇÃO -> BOTÃO DE IR AO CARRINHO=====
function cart(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'block'
    nav.style.display = 'none'
}

//=====FUNÇÃO -> BOTÃO DE IR AS COMPRAS=====
function ircompras(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'block'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    nav.style.display = 'block'
}

//=====FUNÇÃO -> BOTÃO DE TODOS OS PRODUTOS=====
function clicarT(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'block'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    nav.style.display = 'block'
    buttonT.style.background = '#2c3a0f'
    buttonT.style.color = 'white'
    buttonS.style.color = 'black'
    buttonB.style.color = 'black'
    buttonR.style.color = 'black'
    buttonA.style.color = 'black'
    buttonS.style.background = 'white'
    buttonB.style.background = 'white'
    buttonR.style.background = 'white'
    buttonA.style.background = 'white'
}


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }
    document.getElementById("radio"+ count).checked = true;
}
const btnShowSweetAlert = document.querySelector('#btn-show-sweetalert');
btnShowSweetAlert.addEventListener('click',function(){
    Swal.fire({
        title: "Boas-Vindas a nossa loja virtual!",
        text: "Você estava louco(a) por uma loja de produtos naturais com uma variedade de produtos para uma vida mais saudável? Pois essa loja chegou! Venha para a Empório Natural e conheça todas as nossas novidades!",
        imageUrl: "imagens/Alert.png",
        webkitURL:"produtos.html",
        imageWidth: 400,
        imageHeight: 200,
        showCloseButton: true,
        allowEscapeKey: true,
        confirmButtonText: '<a class="ancora" href="produtos.html">Confira nossos produtos</a>',
        imageAlt: "Custom image"
        
      });
})
function alert() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Cupom copiado com sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
      
}
    



   
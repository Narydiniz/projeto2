var suplementos = document.getElementById('suplemento')
var alimento = document.getElementById('alimentos')
var belezas = document.querySelector('div#beleza')
var relaxamentos = document.getElementById('relaxamento')
var vitaminas = document.querySelector('div#vitaminas')
var carrinho = document.getElementById('cart')
var compras = document.getElementById('compras')
var infoCart = document.getElementsByClassName('main-cart-container')[0]
function clicars(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
}
function clicara(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
}
function clicarr(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'block'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
}
function clicarb(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
}
function cart(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'block'
}
function ircompras(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'block'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
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
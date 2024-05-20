var suplementos = document.getElementById('suplemento')
var alimento = document.getElementById('alimentos')
var belezas = document.querySelector('div#beleza')
var relaxamentos = document.getElementById('relaxamento')
var vitaminas = document.querySelector('div#vitaminas')
var carrinho = document.getElementById('cart')
var compras = document.getElementById('compras')
var infoCart = document.getElementsByClassName('main-cart-container-sumir')[0]
var nav = document.getElementsByClassName('navegacao')[0]
function clicars(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    infoCart.style.display = 'none'
}
function clicara(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
}
function clicarr(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
}
function clicarb(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'block'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
}
function cart(){
    suplementos.style.display = 'none'
    relaxamentos.style.display = 'none'
    belezas.style.display = 'none'
    alimento.style.display = 'none'
    carrinho.style.display = 'block'
    infoCart.style.display = 'block'
    nav.style.display = 'none'
}
function ircompras(){
    suplementos.style.display = 'block'
    relaxamentos.style.display = 'block'
    belezas.style.display = 'block'
    alimento.style.display = 'block'
    carrinho.style.display = 'block'
    infoCart.style.display = 'none'
    nav.style.display = 'block'
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
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "imagens/Alert.png",
        webkitURL:"produtos.html",
        imageWidth: 400,
        imageHeight: 200,
        footer: '<a class="ancora" href="produtos.html">Visite nossos produtos</a>',
        imageAlt: "Custom image"
        
      });
})

//https://i.im.ge/2024/05/20/KrY9KF.Alert.png
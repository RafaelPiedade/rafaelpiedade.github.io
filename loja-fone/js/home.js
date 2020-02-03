const $addCar = document.querySelector(".button-store.-second")
const $carrinho = document.querySelector(".container-store .car")
let carrinho = 0


$addCar.addEventListener('click',adicionarNoCarrinho)




function adicionarNoCarrinho(){
    $carrinho.textContent = `Carrinho (${++carrinho})`;
}
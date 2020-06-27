var largura = 0;
var altura = 0;

function ajustaTamanhoPalcoJogo() {
    largura = window.innerHeight;
    altura = window.innerHeight;
}
ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criar o elemento html
    var mosca = document.createElement("img");
    mosca.src = "img/mosca.png";
    mosca.className = "mosca1";
    mosca.style.left = posicaoX + "px";
    mosca.style.top = posicaoY + "px";
    mosca.style.position = "absolute";
    document.body.appendChild(mosca);
}

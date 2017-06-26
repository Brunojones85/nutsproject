window.onload = function(){
  var imagem = document.getElementsByClassName('imagem');
  function aumentar(){
    this.style = "transition: transform 0.3s ease-in";
  }

  function diminuir(){
    this.style = "transform: scale(1)";
    this.style = "transition: 0.2s ease-out";
  }

  for(var i = 0; i < imagem.length; i++){
    imagem[i].onmouseenter = aumentar;
    imagem[i].onmouseleave = diminuir;
  }
}

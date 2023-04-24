var detalhesItens = [
  "Detalhes do Item 1",
  "Detalhes do Item 2",
  "Detalhes do Item 3",
  "Detalhes do Item 4",
  "Detalhes do Item 5"
];

var lista = document.getElementById("lista");

var iframe = document.getElementById("iframe");

var itens = lista.getElementsByTagName("li");
for (var i = 0; i < itens.length; i++) {
  itens[i].addEventListener("click", function() {

      var indiceItem = Array.prototype.indexOf.call(itens, this);
      
      iframe.src = "pagina" + (indiceItem + 1) + ".html";
  });
}
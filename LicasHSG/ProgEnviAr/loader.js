function gotowhatsapp() {

    var codigo = document.getElementById("key").value;
    var nome =document.getElementById("nome").value;

    var url = "https://wa.me/5511984445981?text=" 
    + "nome: " + nome + "%0a"
    + "key: " + codigo + "%0a"


    window.open(url, '_blank').focus();
}




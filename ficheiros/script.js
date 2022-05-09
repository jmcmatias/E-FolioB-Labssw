
//Funções para navegação/
function nav_inicio() {window.location.href="../index.html"}
function nav_regas() {window.location.href="../ficheiros/regas.html"}
function nav_piscinas() {window.location.href="../ficheiros/piscinas.html"}
function nav_contactos() {window.location.href="../ficheiros/contactos.html"}
function nav_info() {window.location.href="../ficheiros/info.html"}


// Função que mostra/esconde os comentários ás marcas
function show_hide_comment (){
    console.log("Entrou");

    let isVisible = document.getElementById("comentarios").style.display;
    if (isVisible=="none"){
        console.log("está escondido")
        document.getElementById("comentarios").style.display="block";
        document.getElementById("but_comentarios").value="Esconder Marcas HTML e CSS Utilizadas";
        document.getElementById("comentarios").scrollIntoView( {behavior: 'smooth'});
    } else{
        
        
        document.getElementById("wrapper").scrollIntoView( {behavior: 'smooth'});
        setTimeout(hide_comment,450);
   
    }
}

function hide_comment() {
    console.log("a esconder")
    document.getElementById("comentarios").style.display="none";
    document.getElementById("but_comentarios").value="Mostrar Marcas HTML e CSS Utilizadas";
}
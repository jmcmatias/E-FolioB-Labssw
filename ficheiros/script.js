
//Funções para navegação/
function nav_inicio() {window.location.href="../index.html"}
function nav_regas() {window.location.href="../ficheiros/regas.html"}
function nav_piscinas() {window.location.href="../ficheiros/piscinas.html"}
function nav_contactos() {window.location.href="../ficheiros/contactos.html"}
function nav_info() {window.location.href="../ficheiros/info.html";}


// Função que mostra/esconde os comentários ás marcas
function show_hide_comment (){
    let isVisible = document.getElementById("comentarios").style.display;
    if (isVisible=="none"){
        console.log("está escondido")
        document.getElementById("comentarios").style.display="block";
        document.getElementById("but_comentarios").value="Esconder Marcas HTML e CSS Utilizadas";
        
        scroll_into("comentarios");
    } else{    
        scroll_into("wrapper");   
        setTimeout(hide_comment,450);
    }
}

function hide_comment() {
    document.getElementById("comentarios").style.display="none";
    document.getElementById("but_comentarios").value="Mostrar Marcas HTML e CSS Utilizadas";
}

function scroll_into(id){
    document.getElementById(id).scrollIntoView( {behavior: 'smooth'});
}

// funções para o formulário de cálculo de volumes

    // funções para manipular o HTML dos formulários em função da opção escolhida
function rect_selected(){
    document.getElementById("linha_result").style.display="none";
    document.getElementById("lab_larg").style.display="inline";
    document.getElementById("largura").style.display="inline";
    document.getElementById("lab_comp").innerHTML="Comprimento (m):";
    document.getElementById("lab_larg").innerHTML="Largura (m):";
}

function circ_selected(){
    document.getElementById("linha_result").style.display="none";
    document.getElementById("lab_larg").style.display="none";
    document.getElementById("largura").style.display="none";
    document.getElementById("lab_comp").innerHTML="Diâmetro (m):";
}

function oval_selected(){
    document.getElementById("linha_result").style.display="none";
    document.getElementById("lab_larg").style.display="inline";
    document.getElementById("largura").style.display="inline";
    document.getElementById("lab_comp").innerHTML="Diâmetro Grande (m):";
    document.getElementById("lab_larg").innerHTML="Diâmetro Pequeno (m):";
}

    // função para calcular o volume em função da opção escolhida
function calc_volume(){
    var c = document.getElementById("comprimento").value;
    var l = document.getElementById("largura").value;
    var p = document.getElementById("prof_media").value;

    if (document.getElementById("rectangular").checked){
        var result = c*l*p;
    } 

    if (document.getElementById("circular").checked){
        var result = ((c/2)*(c/2) * p * Math.PI);
    } 

    if (document.getElementById("oval").checked){
        var result = c*l*p*0.89;
    } 
    result= result.toFixed(2);
    
    document.getElementById("resultado").innerHTML=result;
    document.getElementById("linha_result").style.display="inline";
}




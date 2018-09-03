/*
// Ekrana yazdırma
$(document).ready(function () {
     document.write("Hello, World!");
 });


// bir div kullanımı

$(document).ready(function(){
   $("div").click(function(){
    alert("Uyarı");
    });               
});

*/

//butona tıklandıgında ogeyı gızleme

$(document).ready(function(){
   $("input.buton1").click(function(){
       $("h1").hide(2000);
   });
    $("input.buton2").click(function(){
       $("h1").show(2000);
   });
    
    $(".hello").click(function(){
        $(".hello").hide(2000);
    });
    
    $("div#hi").click(function(){
        $("div#hi").css("color","red");
    });
    
});
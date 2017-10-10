var tab=document.getElementById("mytable");
var but=document.getElementById("mybut");
var text=document.getElementById("mytext");

function nowDate(){
    var now=new Date();
    return now.getMonth+now.getDate;
}
but.onclick=function(){
    var newnode=document.createTextNode("<tr><td>"+nowDate()+"</td><td>"+text.value+"</td></tr>");
    tab.appendChild(newnode);
}
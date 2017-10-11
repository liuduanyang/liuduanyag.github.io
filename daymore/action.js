var tab=document.getElementById("mytable");
var but=document.getElementById("mybut");
var text=document.getElementById("mytext");

function nowDate(){
    var now=new Date();
    return now.getMonth()+1+"月"+now.getDate()+"日";
}
but.onclick=function(){
    var newnode=document.createElement("tr");
    tab.appendChild(newnode);
    newnode.innerHTML="<td>"+nowDate()+"</td><td>"+text.value+"</td>";
}
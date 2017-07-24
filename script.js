var str = "hello";
var text = "";
//0 will be the first letter(h)
var i = 0;
//it will stop at 4 which will be o
while(i<5){
if(str.charAt(i)=="e"|| str.charAt(i)=="o" || str.charAt(i)=="a" || str.charAt(i)=="i" || str.charAt(i)=="u"){
text = text +"ub" + str.charAt(i);
}
else{
text = text + str.charAt(i);
}
i=i+1
}

document.getElementById("demo").innerHTML = text;

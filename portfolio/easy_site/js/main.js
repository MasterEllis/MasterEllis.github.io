var h=document.getElementById("h");
var m=document.getElementById("m");
var s=document.getElementById("s");

setInterval(function(){
var d=new Date();
var hours=23-d.getHours();
if (hours<10){
	hours="0"+hours;
}
var min=59-d.getMinutes();
if(min<10){
	min="0"+min;
}
var sec=59-d.getSeconds();
if(sec<10){
	sec="0"+sec;
	}
h.innerHTML=hours+":";
m.innerHTML=min+":";
s.innerHTML=sec;
},1000)

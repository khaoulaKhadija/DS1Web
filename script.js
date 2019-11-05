//KANBOUA KHAOULA M'GUIGUIZE KHADIJA


var s=document.getElementById('score-0');
var s1 = document.getElementById("score-1");
var s2 = document.getElementById("courent-0");
var s3 = document.getElementById("courent-1");
var n= document.getElementsByClassName("btn-new");

function init(){
	var s=document.getElementById('score-0');
var s1 = document.getElementById("score-1");
var s2 = document.getElementById("courent-0");
var s3 = document.getElementById("courent-1");
	
  if(s!=0 && s1!=0 && s2!=0 && s3!=0){
s.innerHTML=0;
s1.innerHTML=0;
s2.innerHTML=0;
s3.innerHTML=0;
  }

}

function actif(){
	var a=document.querySelector(".panel-joueur-0");
var b =document.querySelector(".panel-joueur-1 actif");
	if(a.classList.contains("panel-joueur-0")){
		a.classList.remove("panel-joueur-0");
		a.classList.toggle("panel-joueur-1 actif");
	}
}



function cacher() {

var a=document.getElementsByClassName("de");
for (var i = 0  ; i<a.length; i++) {
	a[i].style.display="none"
}}


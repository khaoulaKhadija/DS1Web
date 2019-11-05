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
function cacher("de") {

var a=document.getElementsByClassName("de");
for (var i = 0  ; i<a.length; i++) {
	a[i].style.display="none"
}}
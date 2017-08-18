function showText(id,delay){
                var elem=document.getElementById(id);
                setTimeout(function(){elem.style.visibility='visible';},delay*1000)
}
window.onload=function(){
                showText('delayedText1',0);
}

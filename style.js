function myFunction1() {
  document.getElementById("landing").style.zIndex = "3";
  document.getElementById("thesis").style.zIndex = "-1";
  document.getElementById("credits").style.zIndex = "-2";
}


function myFunction2() {
  document.getElementById("thesis").style.zIndex = "1";
  document.getElementById("landing").style.zIndex = "-1";
  document.getElementById("credits").style.zIndex = "-2";
}

function myFunction3() {
  document.getElementById("credits").style.zIndex = "1";
  document.getElementById("thesis").style.zIndex = "-1";
  document.getElementById("landing").style.zIndex = "-2";
};




function PopUp(){
    document.getElementById('ac-wrapper').style.display="none";
};

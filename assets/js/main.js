var myIndex = 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("sliderItem");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 4000);    
}
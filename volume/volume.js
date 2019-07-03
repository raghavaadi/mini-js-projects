var radius1 = document.querySelector('.js-radius');
var height1 = document.querySelector ('.js-height');
var go = document.querySelector('.js-go');

var f = function(){ 
var rad = parseInt(radius1.value);
  var hei = parseInt(height1.value);
  var result = (rad * rad) * 3.14 * hei;

if(result) {
    alert(result);
  } else {
    alert("Nope");
  }};

go.addEventListener('click', function(){
  
    
  f();
  
  
  
  });
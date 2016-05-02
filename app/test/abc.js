//document.getElementById('file').onchange = function(){
//function fun() {
//    var a = "abc.java";
//  var file = a[0];

//  var reader = new FileReader();
//  reader.readAsText(file);
//  reader.onload = function(progressEvent){
    // Entire file
//    console.log(this.result);

    // By lines
//    var lines = this.result.split('\r');
//    for(var line = 0; line < lines.length; line++){
//      document.getElementById("hey").innerHTML += lines[line];
//    }
//  };
//};
function fun() {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
 var blob=  xmlhttp.open("GET", "abc.java", true);
  xmlhttp.send();


//document.getElementById('file').onchange = function(){

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By lines
    var lines = this.result.split('\r');
    for(var line = 0; line < lines.length; line++){
      document.getElementById("hey").innerHTML += lines[line];
    }
  };
    reader.readAsText();

};
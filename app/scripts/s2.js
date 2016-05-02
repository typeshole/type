//     var z = [];
//var x = [];
var x = 1;
var b = [];

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {

  }
}

var a = 0;

var only = [];

function loadXMLDoc2() {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && x == 1) {
      x = x + 1;
      //document.getElementById("demo").innerHTML =
      var asdf = xmlhttp.responseText;
      //  var lines = asdf.split('\r');
      var lines2 = asdf.split("\\s+");

      //     var lines = asdf.split("");


      //document.getElementById("demo").innerHTML = lines2;
      for (var line = 0; line < lines2.length; line++) {
        //  document.getElementById("demo").innerHTML += lines2[line];
        var one = lines2[line].split(" ");
        only.push(one);

        // document.getElementById("d2").innerHTML = one;


        for (var i = 0; i < one.length; i++) {
          var reg = one[i].split("");
          for (var j = 0; j < reg.length; j++) {

            b.push(reg[j]);
            //if (one[i] == "public" || (one[i] == "static") || (one[i] == "int") || (one[i] == "boolean") || (one[i] == "throws") || (one[i] == "void") || (one[i] == "double") || (one[i] == "class") || (one[i] == "long") || (one[i] == "new")) {
            //document.getElementById("d1").insertAdjacentHTML('afterend', '<span style="color:blue;">' + one[i] + " " +'</span>');
            //var blue = one[i].split("");

            //for (var j = 0; j < blue.length; j++) {
            document.getElementById("d1").insertAdjacentHTML('beforeend', '<span id=' + a + '>' + reg[j] + '</span>');
            a = a + 1;
            //}
            //       document.getElementById("d1").insertAdjacentHTML('beforeend', '<span>' + " " + '</span>');

            //}
            //else {
            //var reg = one[i].split("");

            //for (var k = 0; k < reg.length; k++) {
            //  document.getElementById("d1").insertAdjacentHTML('beforeend', '<span style="color:black;">' + reg[j] + '</span>');
            //}
            //}
          }
          document.getElementById("d1").insertAdjacentHTML('beforeend', '<span>' + " " + '</span>');
        }
      }
    }
  };
  xmlhttp.open("GET", "Car.java", true);
  xmlhttp.send();
}

var array = [];
//var a = document.getElementById("demo2").innerHTML;
//var s = a.split("");
//document.getElementById("d").innerHTML = s;

var a2 = 0;

function myFunction(event) {
  var x = event.charCode || event.keyCode;
  var y = String.fromCharCode(x);
  var z = y;
  if (y == "/r") {
    //document.getElementById("demo").innerHTML +=y;
    array.push("/r");
  }
  else {
    array.push(y);

    var letters = "";
    for (var i = 0; i < array.length; i++) {
      letters += array[i].toString();
    }
  }
  for (var g = 0; g < b.length; g++) {
    if ((b[g] == z) && (g == a2)) {
      document.getElementById(g).style.color = "blue";

      a2 = a2 + 1;
    }
  }
}

function func(event) {
  var b = event.charCode || event.keyCode;
  var c = String.fromCharCode(b);
  if (b == 8) {
    //document.getElementById("demo").innerHTML +=b;
    array.pop();
  }
  var letter = "";
  for (var i = 0; i < array.length; i++) {
    letter += array[i].toString();
  }

}
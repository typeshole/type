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

        var array = [];
        var a = document.getElementById("demo").innerHTML;
        var s = a.split("");
        document.getElementById("d").innerHTML = s;

        //var a2 = ["]
        function myFunction(event) {
            var x = event.charCode || event.keyCode;
            var y = String.fromCharCode(x);

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
                document.getElementById("demo").innerHTML = letters;
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
            document.getElementById("demo").innerHTML = letter;

        }
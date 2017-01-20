$(document).ready(function() {
  $("#prime form").submit(function(event) {
    var PrimeLength = $("input#primehtml").val();
    $("#results").empty();
    $("#your-number").empty();
    console.log(PrimeLength);
    if (PrimeLength > 1000000000) {
      $('#results').append("Damn, that's a big number!");
    }
    else {
      $('#your-number').append("Your number: " + PrimeLength + "<br>");
      for (var i = 2; i <= ((PrimeLength/2)+1); i++) {
        if (PrimeLength % i == 0) {
          $('#results').append(PrimeLength/i + '<strong><span class="notprime"> <----------NOTPRIME (' + i + ')<br></span></strong>');
        }
        };
    };
    if( $('#results:empty').length ) {
      $('#results').append("<br>Your number is prime!");
    };

    event.preventDefault();
    });
  });

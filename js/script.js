var quotesArray = [];


window.onload = printQuote();

// this is where we pull our random quotes
function getRandomQuote(){
  if (quotesArray.length === 0){
    quotesArray = [].concat(quotes);
  }

  var quote = quotesArray.splice(
    Math.floor(Math.random()* quotesArray.length),
    1
  )[0];

  console.log(quotesArray);
  return quote;
}
function getRandomColor() {
  var letters = "0123456789A";
  var colour = "#";
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * letters.length)];
  }
  return colour;
}

// when user clicks anywhere on the button, the "printQuote" function is called
function printQuote(){
  var currentQuote = getRandomQuote();  //our current quote begins with a random one
  var message = '<p class ="quote">' + currentQuote.quote + "</p>";
  message += '<p class="source">' + currentQuote.source;
  if (currentQuote.citation) {
    message += '<span class="citation">' + currentQuote.citation + "</span>";
    }
  if (currentQuote.date) {
    message += '<span class="year">' + currentQuote.date + "<span";
  }
  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;

}
printQuote();

// event listener to respond to "Show another quote" button clicks

document.getElementById('loadQuote').addEventListener("click", function() {
  printQuote();

});

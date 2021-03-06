var quotesArray = [];   //this is where all of our quotes from quotes.js will end up. Think of it like a bulletin board.


window.onload = printQuote();   //this prints a quote at random

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

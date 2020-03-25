let quotesData;

function getQuotes() {
  return $.ajax({
    accepts: "application/json",
    url:
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === "string") {
        quotesData = JSON.parse(jsonQuotes);
      }
    }
  });
}

function getRandomQuote() {
  let getRandom = () => Math.floor(Math.random() * quotesData.quotes.length);
  let randomNumber = getRandom();

  let lastQuote = document.getElementById("text").textContent;
  while (lastQuote == quotesData.quotes[randomNumber].quote)
    randomNumber = getRandom(); // check that the quote is not the same as the last one

  let randomQuote = quotesData.quotes[randomNumber].quote;
  let randomAuthor = quotesData.quotes[randomNumber].author;
  return { quote: randomQuote, author: randomAuthor };
}

function setQuote() {
  let newQuote = getRandomQuote();

  $("#new-quote").prop("disabled", true); // disables new quote button
  $("#author, #text").fadeToggle(500, function() {
    $("#author").html(newQuote.author);
    $("#text").html(newQuote.quote);

    $(this).fadeToggle(500);
    $("#new-quote").prop("disabled", false);
  });
}

function tweetQuote() {
  let currentQuote = $("#text").text();
  let currentAuthor = $("#author").text();

  $(this).attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor)
  );
}

$(document).ready(() => {
  getQuotes().then(() => {
    // get quotes data then apply handlers and set first quote
    setQuote();

    $("#new-quote").on("click", setQuote);
    $("#tweet-quote").on("click", tweetQuote);
  });
});

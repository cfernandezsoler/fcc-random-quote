const QUOTES = [
  {
    author: "Kevin Kruse",
    quote: "Life isn’t about getting and having, it’s about giving and being."
  },
  {
    author: "Napoleon Hill",
    quote: "Whatever the mind of man can conceive and believe, it can achieve."
  },
  {
    author: "Albert Einstein",
    quote: "Strive not to be a success, but rather to be of value."
  },
  {
    author: "Robert Frost",
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."
  },
  {
    author: "Florence Nightingale",
    quote: "I attribute my success to this: I never gave or took any excuse."
  },
  {
    author: "Wayne Gretzky",
    quote: "You miss 100% of the shots you don’t take."
  },
  {
    author: "Michael Jordan",
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."
  },
  {
    author: "Amelia Earhart",
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity."
  },
  {
    author: "Babe Ruth",
    quote: "Every strike brings me closer to the next home run."
  },
  {
    author: "W. Clement Stone",
    quote: "Definiteness of purpose is the starting point of all achievement."
  }
];

function newQuote() {
  let getRandom = () => Math.floor(Math.random() * QUOTES.length);
  let randomNumber = getRandom();

  let lastQuote = document.getElementById("text").textContent;
  while (lastQuote == QUOTES[randomNumber].quote) {
    randomNumber = getRandom();
  }

  $("#new-quote").prop("disabled", true);
  $("#author").fadeToggle(500, function() {
    $("#new-quote").prop("disabled", false);
    $(this).fadeToggle(500);
    $(this).html(QUOTES[randomNumber].author);
  });

  $("#text").fadeToggle(500, function() {
    $(this).fadeToggle(500);
    $(this).html(QUOTES[randomNumber].quote);
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
  newQuote();
  $("#new-quote").on("click", newQuote);
  $("#tweet-quote").on("click", tweetQuote);
});

let quoteData;

async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  quoteData = await response.json();
  displayQuote();
}

function displayQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = `"${quoteData.content}" - ${quoteData.author}`;
}

function shareOnTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteData.content}" - ${quoteData.author}`;
  window.open(twitterUrl, '_blank');
}

getQuote();

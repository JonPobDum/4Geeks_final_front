import React, { useEffect, useState } from "react";
import { QuoteRender } from "./quoteRender";

// const proxyUrl = "https://proxy.cors.sh/"
const proxyUrl = "https://test.cors.workers.dev/?"
const apiUrl = "https://api.fisenko.net/v1/quotes/en/random"
// const apiUrl = "https://api.fisenko.net/v1/quotes/en?query=string&offset=0&limit=20"

const getQuotes = (setState) => {
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(proxyUrl + apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => setState(result))
    .catch(error => console.log('error', error));
}

const QuoteContainer = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => getQuotes(setQuote), [])
  
  return (
    <div className="quote-container"> 
    {quote ? (<QuoteRender text={quote.text } author={quote.author?.name} />) 
    : <p>Cargando</p>}
    </div>)
}

export { QuoteContainer }
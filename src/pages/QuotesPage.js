import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  return (
    <div className="general-container quote-container">
      <p>
        &quot;
        {quote}
        &quot;
      </p>
      <p className="author">{author}</p>
    </div>
  );
};

export default Quotes;

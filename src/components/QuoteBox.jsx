import React, { useState } from 'react';
import quotes from "../quotes.json"


const QuoteBox = () => {


   const colorsArray = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'darkcyan', 'yellow']

    
    let quoteRandom = Math.floor(Math.random()*quotes.length)
    const [quotex, setQuotex] = useState(quoteRandom)

    const changeQuote = () => {
        setQuotex(Math.floor(Math.random()*quotes.length))
    }

    let colorRandom = Math.floor(Math.random()*colorsArray.length)
    document.body.style = `background: ${colorsArray[colorRandom]}`
    

    return (
        <div className='quoteBox'>
            <div className='quote-div' style={{color: colorsArray[colorRandom]}}>
            <i class="fa-solid fa-quote-left" style={{color: colorsArray[colorRandom]}}></i>
            <p>{quotes[quoteRandom].quote}</p>
            </div>
            <p className='author-box' style={{color: colorsArray[colorRandom]}}>{quotes[quoteRandom].author}</p>
            <button onClick={changeQuote} style={{background: colorsArray[colorRandom]}} ><i class="fa-solid fa-chevron-right arrow" ></i></button>
            
        </div>
    );
};

export default QuoteBox;
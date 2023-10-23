import React from 'react'
import '../App.css'
import { useEffect, useState } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });

    const svgElement = (
        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5" />
        </svg>
    );

    const fetchNewQuote = () => {
        const words = [
            'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty',
            'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool',
            'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental',
            'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness',
            'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good',
            'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope',
            'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership',
            'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money',
            'morning', 'movies', 'success'
        ];
        const category = words[Math.floor(Math.random() * words.length)];
        const apiKey = '63kJypJiYl0NYjr8FymfPg==cq0OSrCOwMntQB3V'; // Replace with your actual API key

        const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setQuote({ text: data[0].quote, author: data[0].author })
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    useEffect(() => {
        fetchNewQuote();
    }, []);

    return (
        <>
            <div className='main' >
                <div id='quote-box'>
                    <div className='container p-3' style={{ height: '350px' }}>
                        <p id='text' className='quote-text'>{`"${quote.text}"`}</p>
                        <span id='author' className='author-text'>{quote.author}</span>
                    </div>

                    <div className='container px-5'>
                        <button id='new-quote' onClick={fetchNewQuote}>New Quote</button>
                        <span id='tweet'>
                            <a
                                href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
                                target="_blank"
                                id='tweet-quote'
                                rel="noopener noreferrer"
                                style={{ height: '45px', width: '45px' }}
                            >
                                {svgElement}
                            </a>
                        </span>

                    </div>
                </div>
                <div style={{ margin: '20px' }}><h5 style={{ color: 'white' }}>By Tushar</h5></div>
            </div>

        </>

    )
}

export default Quote

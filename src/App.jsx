import React, { useState } from 'react';

export default function App() {
    const [word, setWord] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]);
    const [text, setText] = useState("");
    const [found, setFound] = useState(false);
    const [meaning, setMeaning] = useState("");

    const toggle = () => {
        const filterData = word.find((ele) => ele.word === text);
        if (filterData) {
            setFound(true);
            setMeaning(filterData.meaning);
        } else {
            setFound(false);
            setMeaning("");
        }
    }

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type="text"
                placeholder='Search for a word...'
                value={text}
                id="word"
                onChange={(e) => setText(e.target.value)}
            />
            <button type='button' onClick={toggle}>Search</button>
            <h4>Definition:</h4>
            {found ? (
                <p>{meaning}</p>
            ) : (
                meaning.length === 0 && text.length === 0 ? (
                    <></>
                ) : (
                    <p>Word not found in the dictionary.</p>
                )
            )}
        </div>
    );
}

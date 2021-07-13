import React, { useState } from 'react'
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople]=useState([
        {
            name:'Elon Musk',
            url:'https://wallpapercave.com/wp/wp2048432.jpg'
        }
    ]);
    return (
        <div className="tinderCards">
            {people.map((person)=>{
                <h1>{person.name}</h1>
            })}
        </div>
    )
}

export default TinderCards

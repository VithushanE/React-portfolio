import React from 'react';
import CardItem from './Carditem'; 
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out my projects!</h1>
        <div className= "cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the waterfall"
                    label="advemture"
                    path="/services"
                    />
                    
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Cards

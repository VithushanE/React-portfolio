import React from 'react';
import CardItem from './Carditem'; 
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out my projects!</h1>
        <div className= "cards__container">
            <div className="cards__wrapper">
                <ul >
                    <CardItem
                    src="images/img-9.jpg"
                    text="Explore the waterfall"
                    label="Essential Finance"
                    path="/services"
                    />
                    <br></br>
                     <CardItem 
                    src="images/img-8.jpg"
                    text="Explore the waterfall"
                    label="Javascript quiz"
                    path="/services"
                    />
                    
                    <CardItem 
                    src="images/img-10.jpg"
                    text="Explore the waterfall"
                    label="Day planner Schedule"
                    path="/services"
                    />

                    <CardItem 
                    src="images/img-11.jpg"
                    text="Explore the waterfall"
                    label="Real estate agent"
                    path="/services"
                    />

                    <CardItem 
                    src="images/img-12.jpg"
                    text="Explore the waterfall"
                    label="Budget planner"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Cards

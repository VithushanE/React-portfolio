import React from 'react';
import CardItem from './Carditem'; 
import './Cards.css';

function Contact() {
    return (
        <div className='cards'>
            <h1> Contact me</h1>
        <div className= "cards__container">
            <div className="cards__wrapper">
                <ul >
                    <CardItem
                    src="images/img_13.png"
                    text="Phone number"
                    label="4166167093"
                    path="/services"
                    />
                    <br></br>
                     <CardItem 
                    src="images/img-14.jpg"
                    text="Linkedln"
                    label="Linkedln bio"
                    path="/services"
                    />
                    
                    <CardItem 
                    src="images/img-15.jpg"
                    text="Github"
                    label="Github"
                    path="/services"
                    />

                    <CardItem 
                    src="images/img-11.jpg"
                    text="Resume"
                    label="Resume"
                    path="/services"
                    />

                    <CardItem 
                    src="images/img-16.jpg"
                    text="Resume"
                    label="Resume"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Contact

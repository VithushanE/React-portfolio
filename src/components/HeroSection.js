import React from 'react'
import '../App.css'
import {Button} from './button'
import './Herosection.css'

function HeroSection() {
    return (
        <div className="hero-container">
        
        <h1>Vithushan Esan</h1>
        <p>Welcome to my portfolio</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline'
            buttonSize='btn--large'
            > 
            Get Started
            </Button>
            <Button className="btns" buttonStyle='btn--primary'
            buttonSize='btn--large'
            > 
            Watch trailer test <i className='far fa-play-circle' />
            </Button>
        </div>
            
            
        </div>
    )
}

export default HeroSection

import React from 'react'
import '../App.css'
import { Button } from './button'
import './Herosection.css'

function HeroSection() {
    return (
        <div className="hero-container">

            <h1>Vithushan Esan</h1>
            <p>Welcome to my portfolio</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Get started 
            </Button>
            </div>

        </div>
    )
}

export default HeroSection

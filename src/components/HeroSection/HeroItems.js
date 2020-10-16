import React from 'react';
import { Button } from '../Button/Button';

function HeroItems(props) {
    return (
        <>
                <div className='hero-container'>
                    <img
                        src={props.src}
                        alt="Background image"
                    />
                    <h1>{props.text}</h1>
                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >
                            {props.label}
                        </Button> 
                    </div>
                </div>

        </>
    );
}

export default HeroItems;

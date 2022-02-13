import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props.card)
    const {card, name} = props;
    let total = 0;
    for(const price of card){
        total = total + price.Selary;
    }
    return (
        <div className='card'>
            <h1>Total Programmar:{props.card.length} </h1>
            <h5>Total: ${total.toFixed(2)}</h5>
            {
                card.map(man =>
                    <div className="car-container">
                        <img src={man.picture} alt="" />
                        <h3>{man.name}</h3>
                    </div>
                    )
            }
            <button className='button'>Buy Now</button>
        </div>
    );
};

export default Card;
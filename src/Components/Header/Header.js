import React from 'react';

const Header = (props) => {
    const {card} = props;
    return (
        <div className='p-5 bg-secondary'>
            <h1>Welcome Our Programnar in the world</h1>
            <h1>Total Programmar:{props.card.length} </h1>
            {
                card.map(a => 
                    <div className="car-container">
                    <img src={a.picture} alt="" />
                    <h3>{a.name}</h3>
                </div>
                    )
            }
        </div>
    );
};

export default Header;
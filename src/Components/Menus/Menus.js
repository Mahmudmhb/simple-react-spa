import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from './Card/Card';
import Menu from './Menu/Menu';
import './Menus.css'

const Menus = () => {
    const [peoples, setPeoples] = useState([])
    const [card, setCard] = useState([]);
    useEffect(()=> {
        fetch('/programmar.json')
        .then(res => res.json())
        .then(data => setPeoples(data))
    },[])

    const handleBtn = people =>{
        // console.log('click')
        const newCard = [...card, people];
        setCard(newCard)
    }
    return (
        <div className=''>
            <Header card={card}/>
           <div className="menu-section row">
               <div className='col-md-8'>
                     <div className="row row-cols-md-3 g-4 row-cols-1 ">
                        {
                            peoples.map(people => <Menu 
                                key={people._id}
                                people ={people}
                                handleBtn ={handleBtn}
                            />)
                        }
                     </div>
               </div>
                <div className="card col-md-4">
                    <Card card={card} />
                </div>
           </div>
        </div>
    );
};

export default Menus;
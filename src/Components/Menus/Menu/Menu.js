import React from 'react';

const Menu = (props) => {
    // console.log(props.people)
    const {name, company, about,Selary,age,gender,picture} = props.people;
    return (
        <div class="">
            <div class="col">
                <div class="card">
                <img src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">Selary: ${Selary}</p>
                    <p class="card-text">Work: {company}</p>
                    <p class="card-text">Age: {age}</p>
                    <p class="card-text">Gender: {gender}</p>
                    <p class="card-text">{about}</p>
                    <button onClick={() => props.handleBtn(props.people)} >About More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
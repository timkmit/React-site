import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Cards.css'

const CLIENT_ID = '9uThyKwcvWfnAjSAqAfsSizfcQWhDWEDW55ecc3BZzQ';


export default function Cards() {

    const [category, setCategory] = useState([]);
    const [cards, setCards] = useState([]);

    axios
        .get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`)
        .then(response => {
            response
                .data
                .forEach(element => {
                    setCards(cards => [
                        ...cards,
                        element
                    ]);
                });
        })
        .catch(function (error) {
        console.log(error);
    });

  return (

    

    <div className='main'>
    <div className = "card">
    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
    <div className ="card-content">
      <h2>
        Card Heading
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo...
      </p>
      <a href="#" className ="button">
        Find out more 
        <span className ="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
  </div>
  
  )
}

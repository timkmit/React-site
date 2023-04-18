import React, {useState, useEffect} from 'react'
import Cards from './Cards';
import axios from "axios";
import './Cards.css'

export default function RenderCard() {
    
    const [cards, setCards] = useState([]);


    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/`)
            .then(response => {
                response
                    .data
                    .forEach(element => {
                            setCards(cards => [
                                ...cards,
                                element
                            ]);
                        
                    });
            });
  
    }, []);

  return (
    
    

        <div className="list">
            <div className="itemList">
            { 
            cards.map((cards, value) => (
                    <div key={value}>
                        <Cards
                        title={cards.title}
                        img={cards.photo}
                        descriptions={cards.descriptions}
                    />
                    </div>

                    
                ))
            }
            </div>
           
        </div>
            
        
    
        
  )
}

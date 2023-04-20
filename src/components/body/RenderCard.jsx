import React, {useState, useEffect} from 'react'
import Cards from './Cards';
import axios from "axios";
import './Cards.css'

export default function RenderCard() {

    const [cards, setCards] = useState([]);
    const [open, setOpen] = React.useState(false);

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
                            <div className="modall">
                                <button onClick={() => setOpen(true)} className="open-modal-btn"><Cards title={cards.title} img={cards.photo} descriptions={cards.descriptions}/></button>
                                <div
                                    className={`overlay animated ${open
                                        ? 'show'
                                        : ''}`}>
                                    <div className="modal">
                                        <svg
                                            onClick={() => setOpen(false)}
                                            height="200"
                                            viewBox="0 0 200 200"
                                            width="200">
                                            <title/>
                                            <path
                                                d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                                        </svg>
                                        <Cards title={cards.title} img={cards.photo} descriptions={cards.descriptions}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

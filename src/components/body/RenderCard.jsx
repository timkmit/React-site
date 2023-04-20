import React, {useState, useEffect} from 'react'
import Cards from './Cards';
import axios from "axios";
import './Cards.css'

function RenderCard() {
    const [cards, setCards] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных: ', error);
            });
    }, []);

    const handleOpenModal = (index) => {
        setSelectedCard(index);
        setOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedCard(null);
        setOpen(false);
    }

    return (
        <div className="list">
            <div className="itemList">
                {
                    cards.map((card, index) => (
                        <div key={index}>
                            <div className="modall">
                                <button onClick={() => handleOpenModal(index)} className="open-modal-btn">
                                    <Cards title={card.title} img={card.photo} descriptions={card.descriptions}/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                className={`overlay animated ${open
                    ? 'show'
                    : ''}`}>
                <div className="modal">
                    <svg onClick={handleCloseModal} height="200" viewBox="0 0 200 200" width="200">
                        <title/>
                        <path
                            d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                    </svg>

                    {
                        selectedCard !== null && (
                            <Cards
                                title={cards[selectedCard].title}
                                img={cards[selectedCard].photo}
                                descriptions={cards[selectedCard].descriptions}
                                handleCloseModal={handleCloseModal}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default RenderCard;
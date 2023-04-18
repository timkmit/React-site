import React, {useState, useEffect} from 'react'
import './Cards.css'

const CLIENT_ID = '9uThyKwcvWfnAjSAqAfsSizfcQWhDWEDW55ecc3BZzQ';

export default function Cards(props) {

  const {title, descriptions, img} = props;

  return (

    <div className='main'>
      <div className = "card">
        <img src={img} alt=""/>
        <div className ="card-content">
          <h2>
            {title}
            </h2>
          <p style={{color:'black'}}>
            {descriptions}
          </p>
        </div>
      </div>
    </div>
  
  )
}

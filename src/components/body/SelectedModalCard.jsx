import React from 'react'
import './Cards.css'

export default function SelectedModalCard(props) {
    const {title, descriptions, img} = props;

    const downloadImage = () => {
        // создаем ссылку на изображение
        const link = document.createElement('a');
        link.download = `${title}.jpg`;
        link.href = img;
    
        // добавляем ссылку на страницу и кликаем по ней
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link);
      }

    return (
        <div className="wrapper2">
          <div className="main">
            <div className="card">
              <img src={img} alt=""/>
              <div className="card-content">
                <h2>{title}</h2>
                <p>{descriptions}</p>
              </div>
            </div>
          </div>
    
          <div className="sidebar">
            <h3>Название:</h3>
            <p>{title}</p>
    
            <h3>Описание:</h3>
            <p>{descriptions}</p>
    
            <h3>Картинка:</h3>
            <p>{img}</p>
            <button className='downloadButton'>
            <a className="download" href={img} download={`${title}.jpg`} onClick={downloadImage}>
            Скачать
          </a>
            </button>
            
          </div>
        </div>
      )
}

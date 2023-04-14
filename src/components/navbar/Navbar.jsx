import React, {useState} from 'react'
import './navbar.css'

function Navbar()  {
const [active, setActive] = useState("menu");


const togglen = () => {
  active === 'menu' 
  ? setActive('menu active') 
  : setActive('menu');

}

  return (
    <nav className='nav'>
        <a className='brand'>Brand</a>
        
    <div className="d1">
      <form>
        <input type="text" placeholder="Искать здесь..." />
        <button type="submit">Поиск</button>
      </form>
    </div>
        <ul className={active}>
            <li className='item'><a className='link'>Home</a></li>
            <li className='item'><a className='link'>About</a></li>
            <li className='item'><a className='link'>Contacts</a></li>
            <li className='item'><a className='link'>FAQ</a></li>
        </ul>
        <div onClick={togglen} className='toggle'>
            <div className='l1'></div>
            <div className='l2'></div>
            <div className='l3'></div>
        </div>
    </nav>
  )
}

export default Navbar;
import React from 'react'
import './UnderHeader.css'
import img from './mountain.png'

export default function UnderHeader() {
  return (
    <div className="wrapper">
        <div className="box1">Minimal Websites</div>
        <div className="box2">Less is more is the motto of minimalism</div>
        <div className="box3"><b>Minimalism</b> is a design style that emphasizes simplicity and the removal of superfluous elements in a design, stripping it down to its fundamental elements, colors, shapes and textures. This style was rarely seen in the early days of the internet, but now it is <b>very popular</b> in web design. <b>The three fundamentals of minimal design are balance, alignment and contrast.</b></div>
        <div className='box4'><a><img src={img}/></a></div>
    </div>
  )
}

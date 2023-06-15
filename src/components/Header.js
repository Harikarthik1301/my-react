
import React from "react"
import { useState } from 'react';
import img1 from '../image/naruto.jpg'
import img2 from '../image/death note.jpg'
import img3 from '../image/one peice.jpg'
import img4 from '../image/demon slayer.jpg'
import img5 from '../image/tokyo revenger.jpg'
import img6 from '../image/blue lock.jpg'
import img7 from '../image/attack on titan.jpg'
import img8 from '../image/bleach.jpg'
import img9 from '../image/dragon ball.jpg'
import img10 from '../image/hxh.jpg'

const Header = () => {
  const [value,setvalue]=useState(0);

  const contents =["Naruto","Death Note","One Peice","Demon Slayer","Tokyo Revengers","Blue Lock","Attack On Titan","Bleach","Dragon Ball Z","Hunter X Hunter"];
  const images =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

  function textChanger(){
    
    const index = Math.floor(Math.random()*10);
    setvalue(index);

  }
  return (
    <div> 
       <img className="img" src={images[value]} height="550px" width="100%" alt="Error" />
      <h1>Anime series : </h1> <h3>{contents[value]}</h3>
      <button className="btnstyle" id="but" onClick={textChanger}>Change Anime</button>
    </div>
  )
}

export default Header
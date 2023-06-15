import React from "react"
import  { useState } from "react"
import { FaRegTrashAlt } from 'react-icons/fa';
const List = () => {
    const [items,setItems]= useState(
        [
            {
                id : 1,
                anime : "Naruto",
                checked : true 
            },
            {
                id : 2,
                anime : "Death Note",
                checked : true 
            },
            {
                id : 3,
                anime : "One Peice",
                checked :false 
            },
            {
                id : 4,
                anime : "Demon Slayer",
                checked :false 
            },
        ]
    )
     const handleCheck = (id) =>{
        const animenames = items.map((item) =>
        item.id === id ?{...item,checked:!item.checked} : item )
     setItems(animenames)
     localStorage.setItem("anime_list",JSON.stringify (animenames))
    }

   const handleDelete = (id) =>{
    const animedelete = items.filter((item) =>
    item.id !== id)
    setItems(animedelete)
    localStorage.setItem("anime_list",JSON.stringify (animedelete))
   }
  return (
    <main>
        {(items.length) ? (
        <ul>
            {items.map((item)=>(
            <li className="item" key={item.id}>
          <input type='checkbox' 
          onChange={()=>handleCheck(item.id)}
          checked={item.checked}/>
          <label
           onClick={()=>handleCheck(item.id)}
          id="names">{item.anime}</label>
          <FaRegTrashAlt
          role="button"
          onClick={()=>handleDelete(item.id)}
           tabIndex="0 "/>
            </li>
            ))}
        </ul>
        ) : (
            <p id="nodata">No Anime In The Watchlist...</p>
            )
    }
</main>
  )
}

export default List
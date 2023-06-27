import React from "react"
import { FaPlus } from 'react-icons/fa';
import { useRef } from "react";

const AddItems = ({NewItem,setNewItem,handleAddItems}) => {
  const InputRef = useRef()
  return (
    <div className="formadd" onClick={handleAddItems}>
    <form className='addForm'>
        <input 
        autoFocus
        ref={InputRef}
        type="text"
        placeholder='Add Anime'
        required
        value={NewItem}
        onChange={(e)=> setNewItem (e.target.value)}
         />
         <button type="submit"
         onClick={() => InputRef.current.focus()}>
          <FaPlus/>
         </button>
    </form>
    </div>
  )
}

export default AddItems
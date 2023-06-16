import React from "react"
import { FaPlus } from 'react-icons/fa';
const AddItems = ({NewItem,setNewItem,handleAddItems}) => {
  return (
    <div className="formadd" onClick={handleAddItems}>
    <form className='addForm'>
        <input 
        autoFocus
        type="text"
        placeholder='Add Anime'
        required
        value={NewItem}
        onChange={(e)=> setNewItem (e.target.value)}
         />
         <button type="submit">
          <FaPlus/>
         </button>
    </form>
    </div>
  )
}

export default AddItems
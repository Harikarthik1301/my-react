import React from "react"
import { FaRegTrashAlt } from 'react-icons/fa';

const ListItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
    <input
      type="checkbox"
      onChange={() => handleCheck(item.id)}
      checked={item.checked}
    />
    <label onClick={() => handleCheck(item.id)} id="names">
      {item.anime}
    </label>
    <FaRegTrashAlt
      role="button"
      onClick={() => handleDelete(item.id)}
      tabIndex="0 "
    />
  </li>
  )
}

export default ListItems
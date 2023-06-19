import React from 'react';
import './css/App.css';
import Head from './components/Header';
import Footer from './components/Footer';
// import Counter from './components/Counter';
import List from './components/List';
import  { useState } from "react"
import AddItems from './components/AddItems';
import Search from './components/Search';



function App() {
  
 const[NewItem,setNewItem]=useState('')
 const[search,setsearch]=useState('')
 const [items,setItems]= useState(JSON.parse(localStorage.getItem('anime_list')))

 const addNewItem = (anime)=>{
const id = items.length?items.length+1 : 1
 const adddedItem ={id,anime,checked:false}
 const NewList =[...items,adddedItem]
 console.log(NewList)
 setItems(NewList)
 localStorage.setItem("anime_list",JSON.stringify (NewList))
}

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
const handleAddItems = (e) =>{
e.preventDefault()
if(!NewItem) return;
console.log(NewItem)
addNewItem(NewItem)
setNewItem('')
}
  return (
    <div> 
      <Head/>
      {/* <Counter/> */}
      <AddItems
      NewItem={NewItem}
      setNewItem={setNewItem}
      handleAddItems={handleAddItems}
      />
            <Search 
      search={search}
      setsearch={setsearch}
      />
      <List items={items.filter(item => ((item.anime).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer items={items}/>
    </div>
  )
}

export default App;

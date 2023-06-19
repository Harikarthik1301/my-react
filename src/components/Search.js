import React from "react"

const Search = ({search,setsearch}) => {
  return (
    <div className="formSearch">
  <form className='searchForm'>
    <input type="text" 
    id="search"
    placeholder="Search Anime"
    value={search}
    onChange={(e)=>setsearch(e.target.value)}/>
  </form>
  </div>
  )
}

export default Search
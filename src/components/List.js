import React from "react";
import ListDisplay from "./ListDisplay";

const List = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ListDisplay
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p id="nodata">No Anime In The Watchlist...</p>
      )}
    </>
  );
};

export default List;

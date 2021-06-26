import React, { useState } from "react";

const Favourites = ({ favs, setFav, removeFromFavourites, displayShip }) => {


  return (
    <div className="favourites">
      {favs.length > 0 &&
        favs.map((fav) => (
          <>
            <h4>{fav}</h4>
            <button onClick={() => removeFromFavourites(fav)}>Remove</button>
            <button onClick={() => displayShip(fav)}>Visit</button>
          </>
        ))}
    </div>
  );
};

export default Favourites;

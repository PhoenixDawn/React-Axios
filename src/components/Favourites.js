import React from "react";

const Favourites = ({ favs, setFav, removeFromFavourites, displayShip }) => {


  return (
    <div className="favourites">
      {favs.length > 0 &&
        favs.map((fav) => (
          <div className="favourite-card">
            <h4>{fav.name}</h4>
            <img className="favImg" src={fav.image} alt={fav.name} />

            <button onClick={() => removeFromFavourites(fav)}>Remove</button>
            <button onClick={() => displayShip(fav.name)}>Visit</button>
          </div>
        ))}
    </div>
  );
};

export default Favourites;

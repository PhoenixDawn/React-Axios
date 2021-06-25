
import React, { useEffect, useState } from "react";

export default function DisplayShips({ getShipNames, displayShip, shipNames, ship, addToFavourites }) {

  return (
    <>
      {!ship && !shipNames && <h3>Loading</h3>}
      <h1>SpaceX Ships</h1>
      {shipNames && (
        <ul>
          {shipNames.map((shipName) => (
            // <li key={shipName.name}></li>
            <li key={shipName.name} onClick={() => displayShip(shipName.name)}>
              {shipName.name}
            </li>
          ))}
        </ul>
      )}
      {ship && (
        <>
          <div>
            <p>{ship.name}</p>
          </div>
          <div>
            <button onClick={getShipNames}>Back</button>
            <button onClick={addToFavourites}>Add to Favourites</button>
          </div>
        </>
      )}
    </>
  );
}

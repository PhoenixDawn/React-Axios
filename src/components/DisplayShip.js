import React from "react";

export default function DisplayShips({
  getShipNames,
  displayShip,
  shipNames,
  ship,
  addToFavourites,
}) {
  return (
    <>
      {!ship && !shipNames && <h3>Loading</h3>}

      {shipNames && (
        <ul className="shipNames">
          {shipNames.map((shipName) => (
            // <li key={shipName.name}></li>
            <li key={shipName.name} onClick={() => displayShip(shipName.name)}>
              {shipName.name}
            </li>
          ))}
        </ul>
      )}
      {ship && (
          <div className="displayShip">
            <h3>{ship.name}</h3>
            <p>Year made: {ship.year_built}</p>
            <p>Home Port: {ship.home_port}</p>
            <p>Type: {ship.type}</p>
            <p>Weight: {ship.mass_kg} kg</p>
            <p>Roles:</p>   
            {ship.roles.map((role) => (
              <>
                <p>{role}</p>
              </>
            ))}      
            <img src={ship.image} alt={ship.name} />
            <div>

            <button onClick={getShipNames}>Back</button>
            <button onClick={addToFavourites}>Add to Favourites</button>
            </div>
          </div>
      )}
    </>
  );
}

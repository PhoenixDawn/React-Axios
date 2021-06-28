import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayShips from "./components/DisplayShip";
import Favourites from "./components/Favourites";
import "./style.css";

function App() {
  const [favourites, setFavourites] = useState([]);
  const [shipNames, setNames] = useState(null);
  const [ship, setShip] = useState(null);

  const getShipNames = () => {
    axios.get("https://api.spacexdata.com/v4/ships").then((res) => {
      setNames(res.data);
      setShip(null);
    });
  };

  const displayShip = (name) => {
    axios
      .post("https://api.spacexdata.com/v4/ships/query", {
        query: {
          name: name,
        },
        options: {},
      })
      .then((res) => {
        setShip(res.data.docs[0]);
        setNames(null);
      });
  };

  const addToFavourites = () => {
    let flag = true;
    favourites.forEach((favShip) => {
      if (favShip.name === ship.name) {
        alert("You can't add this twice!");
        flag = false;
      }
    });
    if (flag) {
      setFavourites(favourites.concat(ship));
    }
  };

  const removeFromFavourites = (ship) => {
    setFavourites(favourites.filter((fav) => fav !== ship));
  };

  useEffect(getShipNames, []);

  return (
    <>
      <h1>SpaceX Ships</h1>
      <main className="container">
        <DisplayShips
          getShipNames={getShipNames}
          displayShip={displayShip}
          addToFavourites={addToFavourites}
          setFav={setFavourites}
          favs={favourites}
          shipNames={shipNames}
          ship={ship}
        />
        <Favourites
          favs={favourites}
          setFav={setFavourites}
          removeFromFavourites={removeFromFavourites}
          displayShip={displayShip}
        />
      </main>
    </>
  );
}

export default App;

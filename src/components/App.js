import React from "react";
import "./App.css";

import PokemonDetails from "./PokemonDetails";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <PokemonDetails />
        </div>
      </div>
    );
  }
}

export default App;

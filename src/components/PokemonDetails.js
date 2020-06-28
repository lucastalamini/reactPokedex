import React from "react";
import "./PokemonDetails.css";
import SearchBar from "./SearchBar";
import pokemonList from "../apis/pokemonList";

class PokemonDetails extends React.Component {
  state = {
    images: `https://pokeres.bastionbot.org/images/pokemon/${Math.ceil(
      Math.random() * 500
    )}.png`,
    nameFormated:
      "You'll be shown the name and all the moves of the selected pokémon!",
    typesText: "As well as their respectives type/types. Enjoy!",
  };
  onSearchSubmit = async (term) => {
    const response = await pokemonList.get(
      `https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`
    );

    if (term === "") {
      return alert("Please insert the name of a Pokémon!");
    }

    const name = response.data.name;

    const nameFormated = name[0].toUpperCase() + name.slice(1);
    console.log(nameFormated);

    const moves = response.data.moves.map((item) => item.move.name).join(", ");
    console.log(response.data.moves.map((item) => item.move.name));

    const types = response.data.types.map((item) => item.type.name);
    let type1 = types[0];
    let type2 = types[1] || "";

    let typeColor1;
    if (type1 === "normal") {
      typeColor1 = "Beige";
    } else if (type1 === "fire") {
      typeColor1 = "Orange";
    } else if (type1 === "fighting") {
      typeColor1 = "Brown";
    } else if (type1 === "grass") {
      typeColor1 = "GreenYellow";
    } else if (type1 === "water") {
      typeColor1 = "CornflowerBlue";
    } else if (type1 === "flying") {
      typeColor1 = "BlueViolet";
    } else if (type1 === "poison") {
      typeColor1 = "Purple";
    } else if (type1 === "electric") {
      typeColor1 = "Gold";
    } else if (type1 === "ground") {
      typeColor1 = "Khaki";
    } else if (type1 === "psychic") {
      typeColor1 = "HotPink";
    } else if (type1 === "rock") {
      typeColor1 = "GoldenRod";
    } else if (type1 === "ice") {
      typeColor1 = "DarkTurquoise";
    } else if (type1 === "bug") {
      typeColor1 = "LightGreen";
    } else if (type1 === "dragon") {
      typeColor1 = "Indigo";
    } else if (type1 === "ghost") {
      typeColor1 = "MediumSlateBlue";
    } else if (type1 === "dark") {
      typeColor1 = "SaddleBrown";
    } else if (type1 === "steel") {
      typeColor1 = "Azure";
    } else if (type1 === "fairy") {
      typeColor1 = "LightPink";
    }

    let typeColor2;
    if (type2 === "normal") {
      typeColor2 = "Beige";
    } else if (type2 === "fire") {
      typeColor2 = "Orange";
    } else if (type2 === "fighting") {
      typeColor2 = "Brown";
    } else if (type2 === "grass") {
      typeColor2 = "GreenYellow";
    } else if (type2 === "water") {
      typeColor2 = "CornflowerBlue";
    } else if (type2 === "flying") {
      typeColor2 = "BlueViolet";
    } else if (type2 === "poison") {
      typeColor2 = "Purple";
    } else if (type2 === "electric") {
      typeColor2 = "Gold";
    } else if (type2 === "ground") {
      typeColor2 = "Khaki";
    } else if (type2 === "psychic") {
      typeColor2 = "HotPink";
    } else if (type2 === "rock") {
      typeColor2 = "GoldenRod";
    } else if (type2 === "ice") {
      typeColor2 = "DarkTurquoise";
    } else if (type2 === "bug") {
      typeColor2 = "LightGreen";
    } else if (type2 === "dragon") {
      typeColor2 = "Indigo";
    } else if (type2 === "ghost") {
      typeColor2 = "MediumSlateBlue";
    } else if (type2 === "dark") {
      typeColor2 = "SaddleBrown";
    } else if (type2 === "steel") {
      typeColor2 = "Azure";
    } else if (type2 === "fairy") {
      typeColor2 = "LightPink";
    }

    this.setState({
      images: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
      altImg: "It's a pokémon!",
      nameFormated: nameFormated,
      id: `ID #${response.data.id}`,
      moves: `Moves: ${moves}`,
      typesText: "Types:",
      type1: type1.toUpperCase(),
      type2: type2.toUpperCase(),
      typeColor1: typeColor1,
      typeColor2: typeColor2,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar className="search-bar" onSubmit={this.onSearchSubmit} />
        <div className="ui two column very relaxed grid">
          <div className="column img-container">
            <img
              src={this.state.images}
              alt={this.state.altImg}
              style={{
                maxWidth: "500px",
                maxHeight: "400px",
                marginTop: "20px",
              }}
            />
          </div>
          <div className="column description">
            <p>{this.state.id}</p>
            <p style={{ fontWeight: 900, fontSize: "40px" }}>
              {this.state.nameFormated}
            </p>
            <p style={{ fontSize: "14px" }}>{this.state.moves}</p>
            <br />
            <p
              style={{
                fontSize: "20px",
              }}
            >
              {this.state.typesText}
            </p>
            <p style={{ fontWeight: 900 }}>
              <span
                style={{
                  marginRight: "0.5rem",
                  color: `${this.state.typeColor1}`,
                }}
              >
                {this.state.type1}
              </span>
              <span style={{ color: `${this.state.typeColor2}` }}>
                {" "}
                {this.state.type2}
              </span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;

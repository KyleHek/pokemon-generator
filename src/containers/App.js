import React, { Component } from 'react';
import './App.css';
import Card from '../components/Card';
import Button from '../components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hp: 0,
      imgSrc: '',
      name: '',
      attack: 0,
      defense: 0,
      speed: 0,
      types: [],
    };
  }

  typeColor = {
    bug: "#26de81",
    dragon: "#900aa7",
    electric: "#fed330",
    fairy: "#df6196",
    fighting: "#f76208",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#FF0069",
    rock: "#b8a047",
    water: "#0190FF",
    dark: "#0a464d",
    steel: "#a4aba1"
  };

  url = ("https://pokeapi.co/api/v2/pokemon/");

  getPokeData = () => {
    // generate a random number between 1 - 150
    let id = Math.floor(Math.random() * 807) + 1;
    // combine the url with our random id
    const finalUrl = this.url + id;
    // fetching generated URL
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      this.generateCard(data)
    });
  }

  componentDidMount() {
    // Add the event listener when the component mounts
    window.addEventListener("load", this.getPokeData);
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts
    window.removeEventListener("load", this.getPokeData);
  }

  // generate card
  generateCard = (data) => {
    // get necessary data and assign it to variables
    const hp = data.stats[0].base_stat;
    // alternate img
    // const altSrc = data.sprites.other.dream_world.front_default;
    const imgSrc = data.sprites.front_default;
    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const types = data.types.map((type) => type.type.name)

    this.setState({
      hp,
      imgSrc,
      name,
      attack,
      defense,
      speed,
      types,
    });
  }

  render() {
    return (
      <div className="tc">
        <h1 className='title'>Pokemon Generator</h1>
        <Card 
        hp={this.state.hp}
        imgSrc={this.state.imgSrc}
        name={this.state.name}
        attack={this.state.attack}
        defense={this.state.defense}
        speed={this.state.speed}
        types={this.state.types}
        themeColor={this.typeColor[this.state.types[0]]}
        themeColor2={this.typeColor[this.state.types[1]]}
        />
        <Button generate={this.getPokeData}/>
      </div>
    );
  }
}

export default App;
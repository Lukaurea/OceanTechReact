import "./Card.css"
export default function Card(){
    return <a href="https://www.pokemon.com/br/pokedex/venusaur" target='blank'>
    <div className='cardVenusaur'>
      <h1>Venusaur</h1>
      <h4>N° 0003</h4>
       <div className='Card_tags'>
        <span className='card1'>Grass</span>
        <span className='card2'>Poison</span>
       </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="pokemon tipo planta" />
    </div>
  </a>
}
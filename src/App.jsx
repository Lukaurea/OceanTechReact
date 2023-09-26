
import './App.css'
import Card from './components/Card/Card'

function App(props) {
  const item1 = {
    nome: "Venusaur",
    imagemURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  }

  const item2 = {
    nome: "Venusaur",
    imagemURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  }
  
  return (
    <>
    <Card item={item1}/> 
    <Card item={item2}/> 
    </>
  )
}

export default App

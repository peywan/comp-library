import './App.css'
import Buttons from '../src/components/Buttons.jsx'


function App() {

  return (
    <>
        <h1>Mina komponenter</h1>
        <h2>Buttons</h2>
        <Buttons size={"small"} color={"red"} disabled={true}/>
    </>
  )
}

export default App

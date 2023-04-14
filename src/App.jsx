import './App.css'
import Cards from './components/body/Cards'
import Navbar from './components/navbar/Navbar'
import UnderHeader from './components/underheader/UnderHeader'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <UnderHeader/>
      <Cards/>
    </div>
  )
}

export default App

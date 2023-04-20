import './App.css'
import Navbar from './components/navbar/Navbar'
import UnderHeader from './components/underheader/UnderHeader'
import RenderCard from './components/body/RenderCard'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <UnderHeader/>
      <RenderCard/>
    </div>
  )
}

export default App

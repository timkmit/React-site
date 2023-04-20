import './App.css'
import Navbar from './components/navbar/Navbar'
import UnderHeader from './components/underheader/UnderHeader'
import RenderCard from './components/body/RenderCard'
import Modal from './components/modal/Modal'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Modal />
      <UnderHeader/>
      <RenderCard/>
    </div>
  )
}

export default App

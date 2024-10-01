import './App.css'
import Scene from './components/BoxScene'
import PoinstScene from './components/PointsScene'

function App() {

  return (
    <>
      <div className="flex w-full h-screen bg-black">
        {/* <Scene /> */}
        <PoinstScene />
      </div>
    </>
  )
}

export default App

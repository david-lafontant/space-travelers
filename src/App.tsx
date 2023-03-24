import Header from "./components/header/Header";
import Missions from "./pages/missions/Missions";
import Rockets from "./pages/rockets/Rockets";
function App() {


  return (
    <div className="App">
      <Header />
      <Rockets />
      <Missions />
    </div>
  )
}

export default App

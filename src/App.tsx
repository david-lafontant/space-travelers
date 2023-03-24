import Header from "./components/header/Header";
import Dragons from "./pages/dragons/Dragons";
import Missions from "./pages/missions/Missions";
import Profile from "./pages/profile/Profile";
import Rockets from "./pages/rockets/Rockets";
function App() {


  return (
    <div className="App">
      <Header />
      <Rockets />
      <Dragons />
      <Missions />
      <Profile />
    </div>
  )
}

export default App

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Header from './components/header/Header'
import { Dragons, Missions, Profile, Rockets } from './pages/index.js'

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={ROUTER} />
    </div>
  )
}

export default App

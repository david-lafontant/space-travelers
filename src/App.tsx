import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from "./components/header/Header";
import { Dragons, Missions, Profile, Rockets } from './pages/index';

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Rockets />} />
      <Route exact path="/missions" element={<Missions />} />
      <Route exact path="/dragons" element={<Dragons />} />
      <Route exact path="/profile" element={<Profile />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={ROUTER} />
    </div>
  );
}

export default App;

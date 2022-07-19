import './App.css';
import React from 'react';
import {useRoutes} from "react-router-dom"
import Home from "./pages/Home"
import Settings from './pages/Settings';
function App() {

  const routes = useRoutes([
   
        { path: "", element: <Home /> },
        { path: "/settings", element: <Settings /> },
       
      ],
   
  );
  return routes;
}

export default App;

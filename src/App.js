import './App.css';
import { useState } from 'react';
import Home from './components/Home'

function App() {

  const [loggedIn, setLoggedIn] = useState()

  return (
    <div className="App">
      <Home loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default App;

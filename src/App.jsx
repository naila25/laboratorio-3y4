

import Login from './Components/Login';
import './App.css'
import Home from './Components/Home'
import { useContext } from 'react'; 
import { AuthContext } from './Context/AuthContext';

  function App() {

    const {user} = useContext (AuthContext)

    return (
      <>
      <div>
        {
          !user ?
            <Login /> 
          :
            <Home />
        }
      </div>
    </>
    )
 
}

export default App;

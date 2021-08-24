import React from 'react';
import './App.css';
import Login from './component/Login';
import {selectUser} from "./feature/userSlice";
import {useSelector} from "react-redux";
import Logout from "./component/Logout";


const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
  )
}


export default App;

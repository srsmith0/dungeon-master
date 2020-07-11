import React from 'react';
import './App.css';
import ProtectRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ViewCharacter from './character/ViewCharacter';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Container>
        <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/character' component={ViewCharacter} />
        </Switch>
      </Container>

    </div>
  );
}

export default App;

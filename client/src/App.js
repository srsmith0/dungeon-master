import React from 'react';
import './App.css';
import ProtectRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Container>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login}/>
        </Switch>
      </Container>

    </div>
  );
}

export default App;

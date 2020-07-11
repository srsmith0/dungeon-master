import React from 'react';
import './App.css';
import ProtectRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import CharsHome from './components/CharsHome';
import dnd from './components/dnd.png'
import Profile from './components/Profile'

function App() {
  return (
    <div style={{
      backgroundImage: `url(${dnd})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
      minHeight: '800px',
     }}
    >
      <Navbar/>
      <Container>
        <Switch>
        <ProtectedRoute exact path='/profile' component={Profile} /> 
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/charshome' component={CharsHome} />
        </Switch>
      </Container>
    </div>
  )
}

export default App

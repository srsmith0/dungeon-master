import React, {useContext} from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

import {AuthContext} from "../providers/AuthProvider"

function Navbar() {
  const {user, handleLogout} = useContext(AuthContext)
  const location = useLocation()
  const history = useHistory()

  return (
    <Menu>
      {user ? (
        <>
          <Menu.Menu position='left'>
          <Link to='/CharsHome'>
            <Menu.Item
              id='charProfile'
              name='Characters'
              active={location.pathname === '/CharsHome'}
            />
          </Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
         <Link to='/profile'>
           <Menu.Item
             id='profile'
             name='profile'
             active={location.pathname === '/profile'}
           />
         </Link>
         <Menu.Item
           name='logout'
           onClick={() => handleLogout(history)}
         />
        </Menu.Menu>
       </>
      ) : (
        <>
          <Menu.Menu position='left'>
          <Link to='/'>
            <Menu.Item
              id='register'
              name='Home'
              active={location.pathname === '/'}
            />
          </Link>
          </Menu.Menu>
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
        </Menu.Menu>
      </>
    )}
    </Menu>
  )
}

export default Navbar
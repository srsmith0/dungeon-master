import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { render } from 'react-dom';

const CharsHome = () => {
  const [char, setChar] = useState([])

  // function getChar () {
  //   axios.get(`/api/users/1/characters`)
  //   .then((res) => {
  //     setChar(res.data)
  //   })
  // }


  // useEffect(() => {
  //   getChar();
  //     },[])
    

  useEffect(() => {
    axios.get(`/api/users/1/characters`)
      .then(res => {
        setChar(res.data)
      })
    },[])

  // const renderChar = (props) => {
  //   return char.map(char => (
  //     <ViewCharacter 
  //       key={char.id}
  //       {...char}
  //       deleteCharacter={deleteCharacter}
  //     />
  //   ))
  // }
  // /api/users/:user_id/characters/:id

  // const deleteChar = (char) => {
  //   axios.delete(`/api/users/users_id/character${char.id}`)
  //     .then(res => {
  //       setChar(char.filter(c => c.id !== char.id))
  //     })
  // }

    return (
      <div>
        <br />
        <h1 align="center">Character's Home Page</h1>
        <hr />
        <h2>Character Select</h2>
        <br />
        {char.map(c => (
        <h3><Link to={{
          pathname:'/ViewCharacter',
          showProps:{ ...c}
        }}>
          {c.name}
          </Link></h3>))}
        <br />
        <h2>Create a Character</h2>
        <Link to='/'>
        <Button>Create A Character</Button>
        </Link>
        <br />
        <h2>Delete a Character</h2>
        <Button 
        // onClick={() => deleteChar(c)}
        >
        Delete</Button>
      </div>
    )
}

export default CharsHome;

// Char.map((p) => (
//   <div key={p.id}>
//     <h1><Link to={{
//       pathname:'/ViewCharacter', 
//       showProps: { ...c}
//       }}>
//        {p.title}
//       </Link></h1>
//     {/* <p>{p.content}</p> */}
//     <Button onClick={() => deleteChar(c)}>Delete</Button>

// const deletePost = (post) => {
//   Axios.delete(`/api/users/${user_id}/posts/${post.id}`)
//   .then((res) => {
//     setPosts(posts.filter(p => p.id !== post.id))
//   })
// }
    
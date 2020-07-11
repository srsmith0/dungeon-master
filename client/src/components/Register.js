import React from "react";
// import { Button, Form, Segment, Header } from "semantic-ui-react";
import { AuthConsumer } from "../providers/AuthProvider";
import {Form, Card, Button} from 'react-bootstrap'
import image from './background.jpg'


class Register extends React.Component {
  state = {email:'', password:'', passwordConfirmation:'', fname:'', lname:''}

  handleSubmit = (e) => {
    const {auth: {handleRegister}, history} = this.props
    if (this.state.password !== this.state.passwordConfirmation) {
      alert("passwords don't match");
      return;
    }
    handleRegister({...this.state}, history)
  }

  handleChange= (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
        <div style={background}>
       <h1>Welcome To Dungeon Masters!</h1>

        <Card style ={{width: '25rem', float: 'right'}}>
            <Card.Body>
            <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        label="Email"
                        required
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        label="Password"
                        required
                        name="password"
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formGrouppasswordConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        label="Password Confirmation"
                        required
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        placeholder="Re-type Password"
                        type="password"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>

    );
  }
}

export default class ConnectedRegister extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { val=> <Register {...this.props} auth={val}  /> }

      </AuthConsumer>
    )
  }
}

const background = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'noRepeat',
  backgroundSize: 'cover',
  width: '1000px',
  height: '1000px',
}
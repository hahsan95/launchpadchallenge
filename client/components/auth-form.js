import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, newUserThunk} from '../store'
import { Button, Form, Header } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonStyle = styled.div`
  margin-left: 10px;
`

const HeaderStyle = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, handleNewUser, error} = props

  return (
    // <div>
    //   <Form>
    //     <form onSubmit={handleSubmit} name={name}>
    //       <div>
    //         <label htmlFor="email">
    //           <small>Email</small>
    //         </label>
    //         <input name="email" type="text" />
    //       </div>
    //       <div>
    //         <label htmlFor="password">
    //           <small>Password</small>
    //         </label>
    //         <input name="password" type="password" />
    //       </div>
    //       <ButtonStyle>
    //         <Button type="submit">{displayName}</Button>
    //       </ButtonStyle>
    //       {error && error.response && <div> {error.response.data} </div>}
    //     </form>
    //   </Form>
    // </div>

    <div>
    <HeaderStyle><Header as='h2'>Log In</Header></HeaderStyle>
    <Form>
    <form onSubmit={(displayName === 'Sign Up') ? handleNewUser : handleSubmit} name={name}>
      {displayName === 'Sign Up' &&
      <div>
        <label htmlFor="name"><small>Name</small></label>
        <input name="name" type="text" />
      </div>}
      <div>
        <label htmlFor="email"><small>Email</small></label>
        <input name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password"><small>Password</small></label>
        <input name="password" type="password" />
      </div>
      <div>
      <ButtonStyle>
        <Button type="submit">{displayName}</Button>
      </ButtonStyle>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
    </Form>
  </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    },
    handleNewUser (evt) {
      evt.preventDefault()
      const name = evt.target.name.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(newUserThunk(name, email, password))
      history.push('/')
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

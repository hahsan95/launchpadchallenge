import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import styled from 'styled-components'
import { Image, Button, Menu } from 'semantic-ui-react'

const LogoStyle = styled.div`
  max-width: 250px;
  margin-right: 10px;
  margin-bottom: 1px;
`

const Links = styled.div`
  margin-top: 25px;
  margin-left: 625px;
`

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <Menu
    borderless
    attached='top'
    >
    <Menu.Menu>
      <Menu.Item>
        <LogoStyle>
          <Link to="/data"><Image src='/launchpadlogo.png' /></Link>
        </LogoStyle>
      </Menu.Item>
    </Menu.Menu>
      {isLoggedIn ? (
        <Links>
          {/* The navbar will show these links after you log in */}
          <Link to="/data"><Button color='blue'>Home</Button></Link>
          <Link to="/about"><Button color='blue'>About</Button></Link>
          <Link to="/voting"><Button color='blue'>Vote</Button></Link>
          <a href="#" onClick={handleClick}>
            <Button color='blue'>Logout</Button>
          </a>
        </Links>
      ) : (
        <Links>
          {/* The navbar will show these links before you log in */}
          <Link to="/data"><Button color='blue'>Home</Button></Link>
          <Link to="/about"><Button color='blue'>About</Button></Link>
          <Link to="/login"><Button color='blue'>Login</Button></Link>
          <Link to="/signup"><Button color='blue'>Sign Up</Button></Link>
        </Links>
      )}
    </Menu>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

import React, {Component} from 'react'
import AngularData from './angular-data'
import ReactData from './react-data'
import EmberData from './ember-data'
import VueData from './vue-data'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`

export default class DataPage extends Component {
  render() {
    return (
      <div>
        <HeaderStyle><Header as='h2'>Home</Header></HeaderStyle>
        <ReactData />
        <AngularData />
        <EmberData />
        <VueData />
      </div>
    )
  }
}

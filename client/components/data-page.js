import React, {Component} from 'react'
import AngularData from './angular-data'
import ReactData from './react-data'
import EmberData from './ember-data'
import VueData from './vue-data'

export default class DataPage extends Component {
  render() {
    return (
      <div>
        bitchass
        <AngularData />
        <ReactData />
        <EmberData />
        <VueData />
      </div>
    )
  }
}

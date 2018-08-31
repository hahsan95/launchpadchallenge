import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAngularForksThunk, getAngularCommitsThunk, getAngularPrsThunk } from '../store';

class AngularData extends Component {

  async componentDidMount() {
    if (this.props.forks.length === 0) {
      await this.props.getAngularForksThunk()
    }
    if (this.props.commits.length === 0) {
      await this.props.getAngularCommitsThunk()
    }
    if (this.props.prs.length === 0){
      await this.props.getAngularPrsThunk()
    }
  }

  render () {
    return (
      <div>
        <h3>Data Goes Here</h3>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    forks: store.angularData.forks,
    commits: store.angularData.commits,
    prs: store.angularData.prs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAngularForksThunk: () => dispatch(getAngularForksThunk()),
    getAngularCommitsThunk: () => dispatch(getAngularCommitsThunk()),
    getAngularPrsThunk: () => dispatch(getAngularPrsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AngularData)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getEmberForksThunk, getEmberCommitsThunk, getEmberPrsThunk } from '../store';

class EmberData extends Component {

  async componentDidMount() {
    if (this.props.forks.length === 0) {
      await this.props.getEmberForksThunk()
    }
    if (this.props.commits.length === 0) {
      await this.props.getEmberCommitsThunk()
    }
    if (this.props.prs.length === 0){
      await this.props.getEmberPrsThunk()
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
    forks: store.emberData.forks,
    commits: store.emberData.commits,
    prs: store.emberData.prs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmberForksThunk: () => dispatch(getEmberForksThunk()),
    getEmberCommitsThunk: () => dispatch(getEmberCommitsThunk()),
    getEmberPrsThunk: () => dispatch(getEmberPrsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmberData)

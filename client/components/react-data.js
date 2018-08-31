import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getReactForksThunk, getReactCommitsThunk, getReactPrsThunk } from '../store';

class ReactData extends Component {

  async componentDidMount() {
    if (this.props.forks.length === 0) {
      await this.props.getReactForksThunk()
    }
    if (this.props.commits.length === 0) {
      await this.props.getReactCommitsThunk()
    }
    if (this.props.prs.length === 0){
      await this.props.getReactPrsThunk()
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
    forks: store.reactData.forks,
    commits: store.reactData.commits,
    prs: store.reactData.prs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReactForksThunk: () => dispatch(getReactForksThunk()),
    getReactCommitsThunk: () => dispatch(getReactCommitsThunk()),
    getReactPrsThunk: () => dispatch(getReactPrsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactData)

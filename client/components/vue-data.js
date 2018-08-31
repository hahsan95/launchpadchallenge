import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getVueForksThunk, getVueCommitsThunk, getVuePrsThunk } from '../store';

class VueData extends Component {

  async componentDidMount() {
    if (this.props.forks.length === 0) {
      await this.props.getVueForksThunk()
    }
    if (this.props.commits.length === 0) {
      await this.props.getVueCommitsThunk()
    }
    if (this.props.prs.length === 0){
      await this.props.getVuePrsThunk()
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
    forks: store.vueData.forks,
    commits: store.vueData.commits,
    prs: store.vueData.prs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVueForksThunk: () => dispatch(getVueForksThunk()),
    getVueCommitsThunk: () => dispatch(getVueCommitsThunk()),
    getVuePrsThunk: () => dispatch(getVuePrsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VueData)

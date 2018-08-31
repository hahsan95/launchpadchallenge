import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getEmberForksThunk, getEmberCommitsThunk, getEmberPrsThunk } from '../store';
import { Segment, Divider, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`

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
    let forks = this.props.forks.length
    let commits = this.props.commits.length
    let prs = this.props.prs.length
    console.log('Ember: ', forks, commits, prs)
    return (
      <Wrapper>
        <Segment>
          <h3>Ember</h3>
          <Progress color='orange' active  size='small' value={forks} total={30}>{forks} Forks</Progress>
          <Progress color='orange' active  size='small' value={commits} total={40}>{commits} Commits</Progress>
          <Progress color='orange' active  size='small' value={prs} total={40}>{prs} Pull Requests</Progress>
        </Segment>
        <Divider />
      </Wrapper>
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

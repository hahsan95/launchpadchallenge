import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getReactForksThunk, getReactCommitsThunk, getReactPrsThunk } from '../store';
import { Segment, Divider, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`

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
    let forks = this.props.forks.length
    let commits = this.props.commits.length
    let prs = this.props.prs.length
    console.log('React: ', forks, commits, prs, this.props)
    return (
      <Wrapper>
        <Segment>
          <h3>React</h3>
          <Progress color='blue' active  size='small' value={forks} total={30}>{forks} Forks</Progress>
          <Progress color='blue' active  size='small' value={commits} total={40}>{commits} Commits</Progress>
          <Progress color='blue' active  size='small' value={prs} total={40}>{prs} Pull Requests</Progress>
        </Segment>
        <Divider />
      </Wrapper>
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

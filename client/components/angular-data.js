import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAngularForksThunk, getAngularCommitsThunk, getAngularPrsThunk } from '../store';
import { Segment, Divider, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`


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
    let forks = this.props.forks.length
    let commits = this.props.commits.length
    let prs = this.props.prs.length
    console.log('Angular: ', forks, commits, prs)
    return (
      <Wrapper>
        <Segment>
          <h3>Angular</h3>
          <Progress color='red' active size='small' value={forks} total={30}>{forks} Forks</Progress>
          <Progress color='red' active size='small' value={commits} total={40}>{commits} Commits</Progress>
          <Progress color='red' active size='small' value={prs} total={40}>{prs} Pull Requests</Progress>
        </Segment>
        <Divider />
      </Wrapper>
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

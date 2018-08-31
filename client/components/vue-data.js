import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getVueForksThunk, getVueCommitsThunk, getVuePrsThunk } from '../store';
import { Segment, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
`


class VueData extends Component {

  async componentDidMount() {
    if (this.props.vueforks.length === 0) {
      await this.props.getVueForksThunk()
    }
    if (this.props.vuecommits.length === 0) {
      await this.props.getVueCommitsThunk()
    }
    if (this.props.vueprs.length === 0){
      await this.props.getVuePrsThunk()
    }
  }

  render () {
    let vueforks = this.props.vueforks.length
    let vuecommits = this.props.vuecommits.length
    let vueprs = this.props.vueprs.length
    setInterval(this.props.getVueForksThunk, 36000000)
    setInterval(this.props.getVueCommitsThunk, 36000000)
    setInterval(this.props.getVuePrsThunk, 36000000)
    return (
      <Wrapper>
        <Segment>
          <h3>Vue</h3>
          <Progress color='green' active  size='small' value={vueforks} total={30}>{vueforks} Forks</Progress>
          <Progress color='green' active  size='small' value={vuecommits} total={40}>{vuecommits} Commits</Progress>
          <Progress color='green' active  size='small' value={vueprs} total={40}>{vueprs} Pull Requests</Progress>
        </Segment>
      </Wrapper>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    vueforks: store.vueData.forks,
    vuecommits: store.vueData.commits,
    vueprs: store.vueData.prs
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

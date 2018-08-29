import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFrameworksThunk } from '../store'
import { Button, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';



class FrameworkVoteForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasVoted: false,
      hasVotedFor: {
        React: false,
        Angular: false,
        Ember: false,
        Vue: false
      }
    }
  }

  async componentDidMount() {
    if (this.props.frameworkList.length === 0) {
      await this.props.getFrameworksThunk()
    }
  }

  handleVoteReact = () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: true, Angular: false, Ember: false, Vue: false}})
    return axios.put(`api/frameworks/vote/1`, {})
  }

  handleUnVoteReact = () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    return axios.put(`api/frameworks/unvote/1`, {})
  }

  handleVoteAngular = () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: true, Ember: false, Vue: false}})
    return axios.put(`api/frameworks/vote/2`, {})
  }

  handleUnVoteAngular = () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    return axios.put(`api/frameworks/unvote/2`, {})
  }

  handleVoteEmber = () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: false, Ember: true, Vue: false}})
    return axios.put(`api/frameworks/vote/3`, {})
  }

  handleUnVoteEmber = () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    return axios.put(`api/frameworks/unvote/3`, {})
  }

  handleVoteVue = () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: false, Ember: false, Vue: true}})
    return axios.put(`api/frameworks/vote/4`, {})
  }

  handleUnVoteVue = () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    return axios.put(`api/frameworks/unvote/4`, {})
  }


  render(){
    let frameworks = this.props.frameworkList.sort((a, b) => a.id > b.id)
    return(
      <div>
        {
          this.props.frameworkList.length ?
          <div>
          Name: {frameworks[0].name}
          {!this.state.hasVotedFor.React && !this.state.hasVoted ?
           <Button onClick={this.handleVoteReact}>Votes {frameworks[0].votes}</Button> :
            (!this.state.hasVotedFor.React && this.state.hasVoted ?
            <Button disabled>React</Button> :
            <Button onClick={this.handleUnVoteReact}>Unvote</Button>
            )
          }

          Name: {frameworks[1].name}
          {!this.state.hasVotedFor.Angular && !this.state.hasVoted ?
           <Button onClick={this.handleVoteAngular}>Votes {frameworks[1].votes}</Button> :
            (!this.state.hasVotedFor.Angular && this.state.hasVoted ?
            <Button disabled>Angular</Button> :
            <Button onClick={this.handleUnVoteAngular}>Unvote</Button>
            )
          }

          Name: {frameworks[2].name}
          {!this.state.hasVotedFor.Ember && !this.state.hasVoted ?
           <Button onClick={this.handleVoteEmber}>Votes {frameworks[2].votes}</Button> :
            (!this.state.hasVotedFor.Ember && this.state.hasVoted ?
            <Button disabled>Ember</Button> :
            <Button onClick={this.handleUnVoteEmber}>Unvote</Button>
            )
          }

          Name: {frameworks[3].name}
          {!this.state.hasVotedFor.Vue && !this.state.hasVoted ?
           <Button onClick={this.handleVoteVue}>Votes {frameworks[3].votes}</Button> :
            (!this.state.hasVotedFor.Vue && this.state.hasVoted ?
            <Button disabled>Vue</Button> :
            <Button onClick={this.handleUnVoteVue}>Unvote</Button>
            )
          }

          </div> :
          <Dimmer active inverted>
            <Loader inverted>Loading Framework Data</Loader>
          </Dimmer>
        }


        {/* {frameworks.map(framework => <div key={framework.id}>Name: {framework.name}
        <Button
        onClick={this.handleVote}
        >votes {framework.votes}</Button></div>)} */}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    frameworkList: store.frameworks.frameworkList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFrameworksThunk: () => dispatch(getFrameworksThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameworkVoteForm)

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

  handleVoteReact = async () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: true, Angular: false, Ember: false, Vue: false}})
    await axios.put(`api/frameworks/vote/1`, {})
    await this.props.getFrameworksThunk()
  }

  handleUnVoteReact = async () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    await axios.put(`api/frameworks/unvote/1`, {})
    await this.props.getFrameworksThunk()
  }

  handleVoteAngular = async () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: true, Ember: false, Vue: false}})
    await axios.put(`api/frameworks/vote/2`, {})
    await this.props.getFrameworksThunk()
  }

  handleUnVoteAngular = async () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    await axios.put(`api/frameworks/unvote/2`, {})
    await this.props.getFrameworksThunk()
  }

  handleVoteEmber = async () => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: false, Ember: true, Vue: false}})
    await axios.put(`api/frameworks/vote/3`, {})
    await this.props.getFrameworksThunk()
  }

  handleUnVoteEmber = async () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    await axios.put(`api/frameworks/unvote/3`, {})
    await this.props.getFrameworksThunk()
  }

  handleVoteVue = async() => {
    this.setState({ hasVoted: true, hasVotedFor: {React: false, Angular: false, Ember: false, Vue: true}})
    await axios.put(`api/frameworks/vote/4`, {})
    await this.props.getFrameworksThunk()
  }

  handleUnVoteVue = async () => {
    this.setState({ hasVoted: false, hasVotedFor: {React: false, Angular: false, Embger: false, Vue: false}})
    await axios.put(`api/frameworks/unvote/4`, {})
    await this.props.getFrameworksThunk()
  }


  render () {
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
            <Button disabled>React {frameworks[0].votes}</Button> :
            <Button onClick={this.handleUnVoteReact}>Unvote {frameworks[0].votes}</Button>
            )
          }

          Name: {frameworks[1].name}
          {!this.state.hasVotedFor.Angular && !this.state.hasVoted ?
           <Button onClick={this.handleVoteAngular}>Votes {frameworks[1].votes}</Button> :
            (!this.state.hasVotedFor.Angular && this.state.hasVoted ?
            <Button disabled>Angular {frameworks[1].votes}</Button> :
            <Button onClick={this.handleUnVoteAngular}>Unvote {frameworks[1].votes}</Button>
            )
          }

          Name: {frameworks[2].name}
          {!this.state.hasVotedFor.Ember && !this.state.hasVoted ?
           <Button onClick={this.handleVoteEmber}>Votes {frameworks[2].votes}</Button> :
            (!this.state.hasVotedFor.Ember && this.state.hasVoted ?
            <Button disabled>Ember {frameworks[2].votes}</Button> :
            <Button onClick={this.handleUnVoteEmber}>Unvote {frameworks[2].votes}</Button>
            )
          }

          Name: {frameworks[3].name}
          {!this.state.hasVotedFor.Vue && !this.state.hasVoted ?
           <Button onClick={this.handleVoteVue}>Votes {frameworks[3].votes}</Button> :
            (!this.state.hasVotedFor.Vue && this.state.hasVoted ?
            <Button disabled>Vue {frameworks[3].votes}</Button> :
            <Button onClick={this.handleUnVoteVue}>Unvote {frameworks[3].votes}</Button>
            )
          }

          </div> :
          <Dimmer active inverted>
            <Loader inverted>Loading Framework Data</Loader>
          </Dimmer>
        }
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

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFrameworksThunk, me } from '../store'
import { Button, Dimmer, Loader, Card, Image } from 'semantic-ui-react'
import { VictoryBar } from 'victory'
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
    let data = [
      {quarter: 1, earnings: 103},
      {quarter: 2, earnings: 63},
      {quarter: 3, earnings: 50},
      {quarter: 4, earnings: 42}
    ];

    return(
      <div>
        {
          this.props.frameworkList.length ?
          <Card.Group>

          <Card>
          <Image size='mini' src='https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png'/>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[0].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center'}}>{frameworks[0].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.React && !this.state.hasVoted ?
           <Button basic color='green' onClick={this.handleVoteReact}>Vote for React</Button> :
            (!this.state.hasVotedFor.React && this.state.hasVoted ?
            <Button basic color='green' disabled>React {frameworks[0].votes}</Button> :
            <Button basic color='red' onClick={this.handleUnVoteReact}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <Image size='mini' src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' />
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[1].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center'}}>{frameworks[1].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.Angular && !this.state.hasVoted ?
           <Button basic color='green' onClick={this.handleVoteAngular}>Votes for Angular</Button> :
            (!this.state.hasVotedFor.Angular && this.state.hasVoted ?
            <Button basic color='green' disabled>Angular {frameworks[1].votes}</Button> :
            <Button basic color='red' onClick={this.handleUnVoteAngular}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <Image size='mini' src='https://i1.wp.com/opensourceforu.com/wp-content/uploads/2017/03/ember-js-1.png?w=690&ssl=1'/>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[2].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center'}}>{frameworks[2].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.Ember && !this.state.hasVoted ?
           <Button basic color='green' onClick={this.handleVoteEmber}>Vote for Ember</Button> :
            (!this.state.hasVotedFor.Ember && this.state.hasVoted ?
            <Button basic color='green' disabled>Ember {frameworks[2].votes}</Button> :
            <Button basic color='red' onClick={this.handleUnVoteEmber}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <Image size='mini' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg' />
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[3].name} Votes</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center'}}>{frameworks[3].votes}</h4> </Card.Description>
          {!this.state.hasVotedFor.Vue && !this.state.hasVoted ?
           <Button basic color='green' onClick={this.handleVoteVue}>Vote for Vue</Button> :
            (!this.state.hasVotedFor.Vue && this.state.hasVoted ?
            <Button basic color ='green' disabled>Vue {frameworks[3].votes}</Button> :
            <Button basic color ='red' onClick={this.handleUnVoteVue}>Remove Vote</Button>
            )
          }
          </Card>

          <div style={{width: '500px'}}>
            <VictoryBar data={data} x='quarter' y='earnings' />
          </div>

          </Card.Group> :
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

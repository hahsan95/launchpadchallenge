import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFrameworksThunk } from '../store'
import { Button, Dimmer, Loader, Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

const CardWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: auto;
`

const IconWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`


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
      <CardWrapper>
        {
          this.props.frameworkList.length ?
          <Card.Group>

          <Card>
          <IconWrapper><Icon name='react' color='blue' size='huge' /></IconWrapper>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[0].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center', 'margin-bottom': '10px'}}>{frameworks[0].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.React && !this.state.hasVoted ?
           <Button basic color='blue' onClick={this.handleVoteReact}>Vote for React</Button> :
            (!this.state.hasVotedFor.React && this.state.hasVoted ?
            <Button basic color='blue' disabled>Vote for React</Button> :
            <Button basic color='red' onClick={this.handleUnVoteReact}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <IconWrapper><Icon name='angular' color='red' size='huge' /></IconWrapper>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[1].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center', 'margin-bottom': '10px'}}>{frameworks[1].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.Angular && !this.state.hasVoted ?
           <Button basic color='blue' onClick={this.handleVoteAngular}>Vote for Angular</Button> :
            (!this.state.hasVotedFor.Angular && this.state.hasVoted ?
            <Button basic color='blue' disabled>Vote for Angular</Button> :
            <Button basic color='red' onClick={this.handleUnVoteAngular}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <IconWrapper><Icon name='ember' color='orange' size='huge' style={{alignItems:'center'}} /></IconWrapper>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[2].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center', 'margin-bottom': '10px'}}>{frameworks[2].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.Ember && !this.state.hasVoted ?
           <Button basic color='blue' onClick={this.handleVoteEmber}>Vote for Ember</Button> :
            (!this.state.hasVotedFor.Ember && this.state.hasVoted ?
            <Button basic color='blue' disabled>Vote for Ember</Button> :
            <Button basic color='red' onClick={this.handleUnVoteEmber}>Remove Vote</Button>
            )
          }
          </Card>

          <Card>
          <IconWrapper><Icon name='vuejs' color='green' size='huge' /></IconWrapper>
          <Card.Header><h3 style={{'textAlign':'center'}}>{frameworks[3].name}</h3></Card.Header>
          <Card.Description><h4 style={{'textAlign':'center', 'margin-bottom': '10px'}}>{frameworks[3].votes} Votes</h4> </Card.Description>
          {!this.state.hasVotedFor.Vue && !this.state.hasVoted ?
           <Button basic color='blue' onClick={this.handleVoteVue}>Vote for Vue</Button> :
            (!this.state.hasVotedFor.Vue && this.state.hasVoted ?
            <Button basic color ='blue' disabled>Vote for Vue</Button> :
            <Button basic color ='red' onClick={this.handleUnVoteVue}>Remove Vote</Button>
            )
          }
          </Card>

          {/* <div style={{width: '500px'}}>
            <VictoryBar data={data} x='quarter' y='earnings' />
          </div> */}

          </Card.Group> :
          <Dimmer active inverted>
            <Loader inverted>Loading Framework Data</Loader>
          </Dimmer>
        }
      </CardWrapper>
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

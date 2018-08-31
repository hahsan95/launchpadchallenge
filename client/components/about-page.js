import React, {Component} from 'react'
import { Header, Segment, Message, Icon, List } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`

const ListWrapper = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Flex = styled.div`
  display: flex;
`

export default class AboutPage extends Component {
  render () {
    return (
      <Wrapper>
        <Header as='h2'>About This Page</Header>
        <Message>
          <Message.Header>Note: Also available in README</Message.Header>
        </Message>
        <Segment>
          <p>
            This website is my submission to the July Launchpad Labs coding challenge. My task was to create a website that includes a voting system for users to vote for different Javascript Frameworks and a dashboard which displays information regarding each of these frameworks from the GitHub API. These frameworks include:

            {<ListWrapper><List>
              <List.Item icon='react' content='React' />
              <List.Item icon='angular' content='Angular' />
              <List.Item icon='ember' content='Ember' />
              <List.Item icon='vuejs' content='Vue' />
            </List></ListWrapper>}

            In order to do so, I chose 3 pieces of relevant information from each framework to gather from GitHub:

            {<ListWrapper>
              <List as='ul'>
                <List.Item as='li'>Forks in the last day</List.Item>
                <List.Item as='li'>Commits in the last month</List.Item>
                <List.Item as='li'>Pull Requests in the last six months</List.Item>
              </List>
            </ListWrapper>}

            Firstly, I chose commits as they provide an accurate depiction of development activity. Meanwhile, forks and pull requests also provide a depiction of development activity, with the added benefit of also depicting community support and involvement. In aggregate, I believe these three choices present the user with enough information to cast an educated vote. Below is a link to the GitHub repo. Additionally, feel free to reach out to me on LinkedIn.
          </p>
          <List>
            <Flex>
            <a href='https://github.com/hahsan95/launchpadchallenge'><Icon name ='linkedin square' color='blue' size='huge' /></a>
            <a href='https://www.linkedin.com/in/homumahsan/'><Icon name='github square' color='blue' size='huge' /></a>
            </Flex>
          </List>
        </Segment>
      </Wrapper>
    )
  }
}

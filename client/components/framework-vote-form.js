import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFrameworksThunk } from '../store'
import { Button } from 'semantic-ui-react'

class FrameworkVoteForm extends Component {

  async componentDidMount() {
    if (this.props.frameworkList.length === 0) {
      await this.props.getFrameworksThunk()
    }
  }

  render(){
    let frameworks = this.props.frameworkList
    return(
      <div>
        {frameworks.map(framework => <div key={framework.id}>Name: {framework.name} <Button>votes: {framework.votes}</Button></div>)}
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

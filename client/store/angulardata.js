import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ANGUAR_FORKS = 'GET_ANGUAR_FORKS'
const GET_ANGULAR_COMMITS = 'GET_ANGULAR_COMMITS'
const GET_ANGULAR_PRS = 'GET_ANGULAR_PRS'

/**
 * INITIAL STATE
 */
const angularData = {
  forks: [],
  commits: [],
  prs: []
}

/**
 * ACTION CREATORS
 */
const getAngularForks = forks => ({type: GET_ANGUAR_FORKS, forks})
const getAngularCommits = commits => ({type: GET_ANGULAR_COMMITS, commits})
const getAngularPRs = prs => ({type: GET_ANGULAR_PRS, prs})

/**
 * THUNK CREATORS
 */
export const getAngularForksThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/angulardata/angularforks')
    const allForks = res.data
    dispatch(getAngularForks(allForks))
  }
}

export const getAngularCommitsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/angulardata/angularcommits')
    const allCommits = res.data
    dispatch(getAngularCommits(allCommits))
  }
}

export const getAngularPrsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/angulardata/angularprs')
    const allPRs = res.data
    dispatch(getAngularPRs(allPRs))
  }
}

/**
 * REDUCER
 */
export default function (state = angularData, action) {
  switch (action.type) {
    case GET_ANGUAR_FORKS:
      return { ...state, forks: action.forks }
    case GET_ANGULAR_COMMITS:
      return { ...state, commits: action.commits}
    case GET_ANGULAR_PRS:
    return { ...state, prs: action.prs}
    default:
      return state
  }
}

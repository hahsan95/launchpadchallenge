import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_FORKS = 'GET_ALL_FORKS'
const GET_ALL_COMMITS = 'GET_ALL_COMMITS'
const GET_ALL_PRS = 'GET_ALL_PRS'

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
const getAngularForks = forks => ({type: GET_ALL_FORKS, forks})
const getAngularCommits = commits => ({type: GET_ALL_COMMITS, commits})
const getAngularPRs = prs => ({type: GET_ALL_PRS, prs})

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
    case GET_ALL_FORKS:
      return { ...state, forks: action.forks }
    case GET_ALL_COMMITS:
      return { ...state, commits: action.commits}
    case GET_ALL_PRS:
    return { ...state, prs: action.prs}
    default:
      return state
  }
}

import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_REACT_FORKS = 'GET_REACT_FORKS'
const GET_REACT_COMMITS = 'GET_REACT_COMMITS'
const GET_REACT_PRS = 'GET_REACT_PRS'

/**
 * INITIAL STATE
 */
const reactData = {
  forks: [],
  commits: [],
  prs: []
}

/**
 * ACTION CREATORS
 */
const getReactForks = forks => ({type: GET_REACT_FORKS, forks})
const getReactCommits = commits => ({type: GET_REACT_COMMITS, commits})
const getReactPRs = prs => ({type: GET_REACT_PRS, prs})

/**
 * THUNK CREATORS
 */
export const getReactForksThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/reactdata/reactforks')
    const allForks = res.data
    dispatch(getReactForks(allForks))
  }
}

export const getReactCommitsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/reactdata/reactcommits')
    const allCommits = res.data
    dispatch(getReactCommits(allCommits))
  }
}

export const getReactPrsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/reactdata/reactprs')
    const allPRs = res.data
    dispatch(getReactPRs(allPRs))
  }
}

/**
 * REDUCER
 */
export default function (state = reactData, action) {
  switch (action.type) {
    case GET_REACT_FORKS:
      return { ...state, forks: action.forks }
    case GET_REACT_COMMITS:
      return { ...state, commits: action.commits}
    case GET_REACT_PRS:
    return { ...state, prs: action.prs}
    default:
      return state
  }
}

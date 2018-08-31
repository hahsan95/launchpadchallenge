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
const emberData = {
  forks: [],
  commits: [],
  prs: []
}

/**
 * ACTION CREATORS
 */
const getEmberForks = forks => ({type: GET_ALL_FORKS, forks})
const getEmberCommits = commits => ({type: GET_ALL_COMMITS, commits})
const getEmberPRs = prs => ({type: GET_ALL_PRS, prs})

/**
 * THUNK CREATORS
 */
export const getEmberForksThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/emberdata/emberforks')
    const allForks = res.data
    dispatch(getEmberForks(allForks))
  }
}

export const getEmberCommitsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/emberdata/embercommits')
    const allCommits = res.data
    dispatch(getEmberCommits(allCommits))
  }
}

export const getEmberPrsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/emberdata/emberprs')
    const allPRs = res.data
    dispatch(getEmberPRs(allPRs))
  }
}

/**
 * REDUCER
 */
export default function (state = emberData, action) {
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

import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_EMBER_FORKS = 'GET_EMBER_FORKS'
const GET_EMBER_COMMITS = 'GET_EMBER_COMMITS'
const GET_EMBER_PRS = 'GET_EMBER_PRS'

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
const getEmberForks = forks => ({type: GET_EMBER_FORKS, forks})
const getEmberCommits = commits => ({type: GET_EMBER_COMMITS, commits})
const getEmberPRs = prs => ({type: GET_EMBER_PRS, prs})

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
    case GET_EMBER_FORKS:
      return { ...state, forks: action.forks }
    case GET_EMBER_COMMITS:
      return { ...state, commits: action.commits}
    case GET_EMBER_PRS:
    return { ...state, prs: action.prs}
    default:
      return state
  }
}

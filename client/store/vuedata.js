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
const vueData = {
  forks: [],
  commits: [],
  prs: []
}

/**
 * ACTION CREATORS
 */
const getVueForks = forks => ({type: GET_ALL_FORKS, forks})
const getVueCommits = commits => ({type: GET_ALL_COMMITS, commits})
const getVuePRs = prs => ({type: GET_ALL_PRS, prs})

/**
 * THUNK CREATORS
 */
export const getVueForksThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/vuedata/vueforks')
    const allForks = res.data
    dispatch(getVueForks(allForks))
  }
}

export const getVueCommitsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/vuedata/vuecommits')
    const allCommits = res.data
    dispatch(getVueCommits(allCommits))
  }
}

export const getVuePrsThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/vuedata/vueprs')
    const allPRs = res.data
    dispatch(getVuePRs(allPRs))
  }
}

/**
 * REDUCER
 */
export default function (state = vueData, action) {
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

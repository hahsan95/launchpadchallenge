import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_VUE_FORKS = 'GET_VUE_FORKS'
const GET_VUE_COMMITS = 'GET_VUE_COMMITS'
const GET_VUE_PRS = 'GET_VUE_PRS'

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
const getVueForks = forks => ({type: GET_VUE_FORKS, forks})
const getVueCommits = commits => ({type: GET_VUE_COMMITS, commits})
const getVuePRs = prs => ({type: GET_VUE_PRS, prs})

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
    case GET_VUE_FORKS:
      return { ...state, forks: action.forks }
    case GET_VUE_COMMITS:
      return { ...state, commits: action.commits}
    case GET_VUE_PRS:
    return { ...state, prs: action.prs}
    default:
      return state
  }
}

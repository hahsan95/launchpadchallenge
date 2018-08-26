import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_FRAMEWORKS = 'GET_ALL_FRAMEWORKS'

/**
 * INITIAL STATE
 */
const frameworks = {
  frameworkList: []
}

/**
 * ACTION CREATORS
 */
const getFrameworks = frameworkList => {
  return {
    type: GET_ALL_FRAMEWORKS,
    frameworkList
  }
}

/**
 * THUNK CREATORS
 */
export const getFrameworksThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/frameworks')
    const allFrameworks = res.data
    dispatch(getFrameworks(allFrameworks))
  }
}

/**
 * REDUCER
 */
export default function (state = frameworks, action) {
  switch (action.type) {
    case GET_ALL_FRAMEWORKS:
      return { ...state, frameworkList: action.frameworkList }
    default:
      return state
  }
}

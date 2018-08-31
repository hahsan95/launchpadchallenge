import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USER_VOTES = 'GET_USERVOTES'

/**
 * INITIAL STATE
 */
const userVotes = {
  votes: []
}

/**
 * ACTION CREATORS
 */
const getUserVotes = votes => ({type: GET_USER_VOTES, votes})

/**
 * THUNK CREATORS
 */
export const getUserVotesThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/users/me')
    const allVotes = res.data
    dispatch(getUserVotes(allVotes))
  }
}


/**
 * REDUCER
 */
export default function (state = userVotes, action) {
  switch (action.type) {
    case GET_USER_VOTES:
      return { ...state, votes: action.votes }
    default:
      return state
  }
}

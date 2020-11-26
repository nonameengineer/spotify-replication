export const userReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }

    default:
      return state
  }
}

export default userReducer

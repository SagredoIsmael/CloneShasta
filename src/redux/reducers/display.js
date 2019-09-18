import { SET_NUMBER_DISPLAY } from '../actions/types'

const initialState = {
  markerNumber: ''
}

export default (state = initialState, action) => {
  switch(action.type){

    case SET_NUMBER_DISPLAY:
      const newNumber = state.markerNumber + action.payload
      return {...state, markerNumber: newNumber}

    default:
      return state
  }
}

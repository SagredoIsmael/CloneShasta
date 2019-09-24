import { SET_NUMBER_DISPLAY, DELETE_NUMBER_DISPLAY, FULL_NUMBER_DISPLAY } from './types'

export const setNumberFromDisplay = (number) => {
  return {
    type: SET_NUMBER_DISPLAY,
    payload: number
  }
}

export const deleteNumberFromDisplay = (number) => {
  return {
    type: DELETE_NUMBER_DISPLAY
  }
}

export const fullNumberFromDisplay = (number) => {
  return {
    type: FULL_NUMBER_DISPLAY
  }
}

export const checkNumberDisplay = (number) => (dispatch, getState) => {
  switch(number) {
    case '<':
      dispatch(deleteNumberFromDisplay())
      break
    default:
      if (getState().display.markerNumber.toString().length < 9)
        dispatch(setNumberFromDisplay(number))
      else
        dispatch(fullNumberFromDisplay())
      break
  }
}

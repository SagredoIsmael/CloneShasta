import { SET_NUMBER_DISPLAY, DELETE_NUMBER_DISPLAY, FULL_NUMBER_DISPLAY, EMPTY_NUMBER_DISPLAY, ACTIVE_DECIMAL_NUMBER_DISPLAY } from './types'

export const setNumberFromDisplay = (number) => {
  return {
    type: SET_NUMBER_DISPLAY,
    payload: number
  }
}

export const deleteNumberFromDisplay = () => {
  return {
    type: DELETE_NUMBER_DISPLAY
  }
}

export const fullNumberFromDisplay = () => {
  return {
    type: FULL_NUMBER_DISPLAY
  }
}

export const emptyNumberFromDisplay = () => {
  return {
    type: EMPTY_NUMBER_DISPLAY
  }
}

export const activeDecimalNumberFromDisplay = () => {
  return {
    type: ACTIVE_DECIMAL_NUMBER_DISPLAY
  }
}

export const checkNumberDisplay = (number) => (dispatch, getState) => {
  switch(number) {

    case '<':
      if (getState().display.markerNumber.toString().length < 2)
        dispatch(emptyNumberFromDisplay(number))
      else
        dispatch(deleteNumberFromDisplay())
      break

    case ',':
      dispatch(activeDecimalNumberFromDisplay())
      break

    default:
      if (getState().display.markerNumber.toString().length > 9)
        dispatch(fullNumberFromDisplay())
      else
        dispatch(setNumberFromDisplay(number))
      break
  }
}

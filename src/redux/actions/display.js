import { SET_NUMBER_DISPLAY, DELETE_NUMBER_DISPLAY, FULL_NUMBER_DISPLAY,
          EMPTY_NUMBER_DISPLAY, ACTIVE_DECIMAL_NUMBER_DISPLAY,
          SET_DECIMAL_DISPLAY, DELETE_DECIMAL_DISPLAY, DESACTIVE_DECIMAL_NUMBER_DISPLAY} from './types'

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

export const desactiveDecimalNumberFromDisplay = () => {
  return {
    type: DESACTIVE_DECIMAL_NUMBER_DISPLAY
  }
}

export const setDecimalFromDisplay = (number) => {
  return {
    type: SET_DECIMAL_DISPLAY,
    payload: number
  }
}

export const deleteDecimalFromDisplay = (number) => {
  return {
    type: DELETE_DECIMAL_DISPLAY,
    payload: number
  }
}

export const checkNumberDisplay = (number) => (dispatch, getState) => {
  switch(number) {

    case '<':
      if (getState().display.isSecondDecimalActive)
        dispatch(deleteDecimalFromDisplay(getState().display.markerDecimal.charAt(0) + '0'))
      else {
        if (getState().display.isFirstDecimalActive)
          dispatch(desactiveDecimalNumberFromDisplay())
        else {
          if (getState().display.markerNumber.toString().length < 2)
            dispatch(emptyNumberFromDisplay(number))
          else
            dispatch(deleteNumberFromDisplay())
        }
      }
      break

    case ',':
      dispatch(activeDecimalNumberFromDisplay())
      break

    default:
      if (getState().display.isSecondDecimalActive)
        dispatch(setDecimalFromDisplay(getState().display.markerDecimal.charAt(0) + number))
      else {
        if (getState().display.isFirstDecimalActive)
          dispatch(setDecimalFromDisplay(number + '0'))
        else {
          if (getState().display.markerNumber.toString().length > 6)
            dispatch(fullNumberFromDisplay())
          else
            dispatch(setNumberFromDisplay(number))
        }
      }
      break
    }
  }

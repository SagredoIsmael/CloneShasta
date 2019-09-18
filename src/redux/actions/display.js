import { SET_NUMBER_DISPLAY } from './types'

export const setNumberFromDisplay = (number) => {
  return {
    type: SET_NUMBER_DISPLAY,
    payload: number
  }
}

import { SET_NUMBER_DISPLAY, DELETE_NUMBER_DISPLAY, FULL_NUMBER_DISPLAY,
        EMPTY_NUMBER_DISPLAY, ACTIVE_DECIMAL_NUMBER_DISPLAY,
        SET_DECIMAL_DISPLAY, DELETE_DECIMAL_DISPLAY, DESACTIVE_DECIMAL_NUMBER_DISPLAY} from '../actions/types'


const initialState = {
  markerNumber: 0,
  markerDecimal: '',
  isFirstDecimalActive: false,
  isSecondDecimalActive: false,
}

export default (state = initialState, action) => {
  switch(action.type){

    case SET_NUMBER_DISPLAY:
      const newNumber = state.markerNumber.toString() + action.payload
      return {...state, markerNumber: parseInt(newNumber, 10)}

    case DELETE_NUMBER_DISPLAY:
      const newStr = state.markerNumber.toString().slice(0, state.markerNumber.toString().length-1);
      return {...state, markerNumber: parseInt(newStr, 10)}

    case FULL_NUMBER_DISPLAY:
      return state

    case ACTIVE_DECIMAL_NUMBER_DISPLAY:
      return {...state, isFirstDecimalActive: true, markerDecimal: '00'}

    case EMPTY_NUMBER_DISPLAY:
      return {...state, markerNumber: 0}

    case SET_DECIMAL_DISPLAY:
      return {...state, markerDecimal: action.payload, isSecondDecimalActive: true}

    case DELETE_DECIMAL_DISPLAY:
      return {...state, markerDecimal: action.payload, isSecondDecimalActive: false}

    case DESACTIVE_DECIMAL_NUMBER_DISPLAY:
      return {...state, isFirstDecimalActive: false, markerDecimal: ''}

    default:
      return state
  }
}

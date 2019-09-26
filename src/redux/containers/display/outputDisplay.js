import { connect } from 'react-redux'
import outputDisplay from '../../../components/display/outputDisplay'

const mapStateToProps = state => {
  return {  numbersOutput : state.display.markerNumber,
            numbersDecimal : state.display.markerDecimal,
            sizeFontNumber: state.display.sizeFontNumber,
        }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(outputDisplay)

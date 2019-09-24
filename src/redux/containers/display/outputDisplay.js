import { connect } from 'react-redux'
import outputDisplay from '../../../components/display/outputDisplay'

const mapStateToProps = state => {
  return { numbersOutput : state.display.markerNumber }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(outputDisplay)

import { connect } from 'react-redux'
import { setNumberFromDisplay } from '../../actions/display'
import numberDisplay from '../../../components/display/numberDisplay'

const mapStateToProps = state => {
  return {test:state}
}

const mapDispatchToProps = dispatch => {
  return {
    setNumberFromDisplay: () => {
      dispatch(setNumberFromDisplay())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(numberDisplay)

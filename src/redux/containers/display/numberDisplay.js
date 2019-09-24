import { connect } from 'react-redux'
import { checkNumberDisplay } from '../../actions/display'
import numberDisplay from '../../../components/display/numberDisplay'

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    checkNumberDisplay: (number) => {
      dispatch(checkNumberDisplay(number))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(numberDisplay)

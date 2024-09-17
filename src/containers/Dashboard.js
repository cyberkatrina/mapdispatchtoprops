import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeCar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
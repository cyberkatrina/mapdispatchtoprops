import { connect } from "react-redux";
import AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCar }, dispatch)
}

//* LONGHAND *
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCar: (newCar) => dispatch(addCar(newCar))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(AddCar)

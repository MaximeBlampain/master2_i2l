import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Login from "../../components/Login"

// Actions
import { login } from "../../stores/Login/LoginActions"
// Selectors

// Redux
const mapDispatchToProps = dispatch => ({
    login: form => dispatch(login(form))
})

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps,mapDispatchToProps)(Login)

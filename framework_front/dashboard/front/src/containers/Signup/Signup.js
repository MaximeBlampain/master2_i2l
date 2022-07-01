import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Signup from "../../components/Signup"

// Actions
import { signup } from "../../stores/Signup/SignupActions"

// Redux
const mapDispatchToProps = dispatch => ({
    signup: form => dispatch(signup(form)),
})

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)

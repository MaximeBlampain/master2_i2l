import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Profile from "../../components/Profile"

// Actions

// Selectors

// Redux
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)

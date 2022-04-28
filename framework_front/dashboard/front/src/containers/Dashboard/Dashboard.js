import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Dashboard from "../../components/Dashboard"

// Actions

// Selectors

// Redux
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

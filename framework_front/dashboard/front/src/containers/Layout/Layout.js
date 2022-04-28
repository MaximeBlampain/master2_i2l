import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Layout from "../../components/Layout"

// Actions

// Selectors

// Redux
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)

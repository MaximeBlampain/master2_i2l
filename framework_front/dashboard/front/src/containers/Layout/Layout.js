import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Layout from "../../components/Layout"

// Actions
import { logout } from "../../stores/Login/LoginActions"

// Selectors
import { 
  selectFirstname,
  selectLastname,
  selectLanguageKey 
} from "../../stores/Profile/ProfileSelectors"

// Redux
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
})

const mapStateToProps = createStructuredSelector({
  FIRSTNAME: selectFirstname,
  LASTNAME: selectLastname,
  LANGUAGE_KEY: selectLanguageKey
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)

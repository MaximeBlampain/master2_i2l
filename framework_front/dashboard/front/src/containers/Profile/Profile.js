import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Profile from "../../components/Profile"

// Actions
import { deleteUser, update } from "../../stores/Profile/ProfileActions"

// Selectors
import {
  selectUserId,
  selectFirstname,
  selectLastname,
  selectEmail,
  selectLanguageKey,
} from "../../stores/Profile/ProfileSelectors"

// Redux
const mapDispatchToProps = dispatch => ({
  onUpdateProfile: form => dispatch(update(form)),
  onDeleteProfile: USER_ID => dispatch(deleteUser(USER_ID))
})

const mapStateToProps = createStructuredSelector({
  USER_ID: selectUserId,
  FIRSTNAME: selectFirstname,
  LASTNAME: selectLastname,
  EMAIL: selectEmail,
  LANGUAGE_KEY: selectLanguageKey,
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

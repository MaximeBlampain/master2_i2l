import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import { selectToken } from "../../stores/Profile/ProfileSelectors"
import Router from "./Router"

function App({token}) {
  const isLoggedIn = token !== ""
  return <Router isLoggedIn={isLoggedIn} />
}



const mapStateToProps = createStructuredSelector({
  token: selectToken,
})

export default connect(mapStateToProps, null)(App)
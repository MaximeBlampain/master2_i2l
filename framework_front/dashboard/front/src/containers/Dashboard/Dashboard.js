import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Dashboard from "../../components/Dashboard"

// Actions
import { getAllCryptos } from "../../stores/Crypto/CryptoActions"
import { getWallet } from "../../stores/Wallet/WalletActions"

// Selectors
import {selectCryptoList} from "../../stores/Crypto/CryptoSelectors"
import {selectCryptoAssets} from "../../stores/Wallet/WalletSelectors"
import {selectLanguageKey} from "../../stores/Profile/ProfileSelectors"

// Redux
const mapDispatchToProps = dispatch => ({
  getCryptos: () => dispatch(getAllCryptos()),
  getWallet: () => dispatch(getWallet())
})

const mapStateToProps = createStructuredSelector({
  LANGUAGE_KEY: selectLanguageKey,
  cryptoList: selectCryptoList,
  cryptoAssets: selectCryptoAssets,
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

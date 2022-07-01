import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

// Components
import Wallet from "../../components/Wallet"

// Actions
import {addAsset, deleteAsset, getWallet} from "../../stores/Wallet/WalletActions"
import {getAllCryptos} from "../../stores/Crypto/CryptoActions"

// Selectors
import {selectCryptoAssets} from "../../stores/Wallet/WalletSelectors"
import {selectLanguageKey} from "../../stores/Profile/ProfileSelectors"
import {selectCryptoList} from "../../stores/Crypto/CryptoSelectors";

// Redux
const mapDispatchToProps = dispatch => ({
  getCryptos: () => dispatch(getAllCryptos()),
  getWallet: () => dispatch(getWallet()),
  addAsset: asset => dispatch(addAsset(asset)),
  deleteAsset: id => dispatch(deleteAsset(id))
})

const mapStateToProps = createStructuredSelector({
  LANGUAGE_KEY: selectLanguageKey,
  cryptoList: selectCryptoList,
  cryptoAssets: selectCryptoAssets,
})

export default connect(mapStateToProps,mapDispatchToProps)(Wallet)

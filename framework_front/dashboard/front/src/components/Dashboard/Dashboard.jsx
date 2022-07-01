import {useEffect, useMemo} from "react"
import {Grid} from "@chakra-ui/react"
import CryptoList from "./components/CryptoList"
import MyAssets from "./components/MyAssets"


import getTranslation from "../../utils/getTranslation"

export default function Dashboard({
  getCryptos,
  getWallet,
  cryptoList,
  cryptoAssets,
  LANGUAGE_KEY,
}) {
  const translation = useMemo(() => getTranslation(LANGUAGE_KEY),[LANGUAGE_KEY])

  useEffect(() => {
    getCryptos()
    getWallet()
  },[])

  return (
    <Grid h="calc(100vh - 80px)" p="5rem 0" m="auto" gridTemplateColumns="1fr 0.75fr">
      <CryptoList cryptoList={cryptoList} translation={translation}/>
      <MyAssets cryptoAssets={cryptoAssets} translation={translation}/>
    </Grid>
  )
}
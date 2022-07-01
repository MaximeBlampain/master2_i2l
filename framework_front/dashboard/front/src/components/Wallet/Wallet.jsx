import {useEffect, useState, useMemo} from "react"
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

import WalletList from "./components/WalletList"

import getTranslation from "../../utils/getTranslation";
import AddCurrencyModal from "./components/AddCurrencyModal";

export default function Wallet({
  LANGUAGE_KEY,
  cryptoAssets,
  cryptoList,
  getWallet,
  getCryptos,
  addAsset,
  deleteAsset,
}) {
  const [isModalOpenned, setModalOpen] = useState(false)

  const translation = useMemo(() => getTranslation(LANGUAGE_KEY),[LANGUAGE_KEY])

  useEffect(() => {
    getCryptos()
    getWallet()
  },[])

  return (
    <Flex
      p="50"
      h="calc(100vh - 80px)"
      direction="column"
      align="center"
    >
      <AddCurrencyModal
        isModalOpen={isModalOpenned}
        translation={translation}
        cryptoList={cryptoList}
        onClose={() => setModalOpen(false)}
        onAddAsset={addAsset}
      />
      <Text as="b" fontSize="2xl">{translation?.WALLET}</Text>
      <Flex width="100%" justify="flex-end">
        <Button colorScheme="yellow" onClick={() => setModalOpen(true)}>{translation?.ADD_ASSET}</Button>
      </Flex>
      <WalletList
        translation={translation}
        cryptoAssets={cryptoAssets}
        cryptoList={cryptoList}
        deleteAsset={deleteAsset}
      />
    </Flex>
  )
}

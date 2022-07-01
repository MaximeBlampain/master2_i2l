import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper,
  Select, Stack,
  Text
} from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";

const initialForm = {
  "SYMBOL": "",
  "NUMBER_TOKEN": 0,
}

export default function AddCurrencyModal({
  isModalOpen,
  cryptoList,
  translation,
  onClose,
  onAddAsset,
}){

  const { form, onChangeInput } = useForm(initialForm)
  const tokenList = cryptoList.map(crypto => ({name: crypto.name, symbol: crypto.symbol}))

  function addCurrency(){
    if(form?.SYMBOL === "" || form?.NUMBER_TOKEN == 0) return;

    const crypto = cryptoList.find(crypto => crypto.symbol === form?.SYMBOL)
    const price = crypto.actual_price_eur * parseInt(form?.NUMBER_TOKEN)

    onAddAsset({
      SYMBOL: form?.SYMBOL,
      NUMBER_TOKEN: form?.NUMBER_TOKEN,
      PURCHASE_PRICE: price,
    })
    onClose()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent >
        <ModalHeader>{translation?.ADD_ASSET}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={10} >
          <Stack spacing={5}>
            <Select
              variant='outline'
              placeholder={translation?.CRYPTO}
              onChange={e => onChangeInput(e, "SYMBOL")}
            >
              {tokenList.map(token => (
                <option key={token.symbol} value={token.symbol}>
                  {token.name}
                </option>
              ))}
            </Select>
            <Text>{translation?.QUANTITY}</Text>
            <NumberInput
              step={1}
              defaultValue={0}
              min={0}
              max={1000}
            >
              <NumberInputField onChange={e => onChangeInput(e, "NUMBER_TOKEN")}/>
            </NumberInput>

            <Button colorScheme="yellow" onClick={() => addCurrency()}> {translation?.ADD}</Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
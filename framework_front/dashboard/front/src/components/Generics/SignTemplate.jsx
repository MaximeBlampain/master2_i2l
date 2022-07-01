

import { Flex, Image } from "@chakra-ui/react"

import CryptoBackground from "../../assets/images/cryptomonnaie.jpg"
export default function SignTemplate({ children }){

  return (
    <>
      <Image
        src={CryptoBackground}
        position="absolute"
        inset="0"
        h="100%"
        w="100%"
        zIndex="-1"
      />
      <Flex
        direction="column"
        justify="space-evenly"
        align="center"
        h="100%"
        w="450px"
        boxShadow="5px 0px 6px #000000A0"
        bg="ghostwhite"
        p="5"
      >
      { children }
      </Flex>
    </>
  )
}
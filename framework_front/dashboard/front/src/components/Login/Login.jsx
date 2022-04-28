
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack, Text
} from "@chakra-ui/react"

import CryptoBackground from "../../assets/images/cryptomonnaie.jpg"
import {EmailIcon, LockIcon, QuestionIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";
export default function Login() {
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
          justify="center"
          align="center"
          h="100%"
          w="450px"
          boxShadow="5px 0px 6px #000000A0"
          bg="ghostwhite"
          p="5"
        >
            <Heading mb="3"> Crypto APP</Heading>

          <Stack spacing="4" display="flex" align="center">
            <InputGroup w="200">
              <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
              <Input type='email' placeholder='Email' />
            </InputGroup>
            <InputGroup w="200">
              <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
              <Input type='password' placeholder='Password' />
            </InputGroup>

            <Text>
              Pas de compte ?
              <NavLink to="/signup"> Inscrivez-vous... </NavLink>
            </Text>

            <Button w="200px" colorScheme="yellow" color="white">
              Connect
            </Button>
          </Stack>
        </Flex>
    </>
  )
}
import { useMemo } from "react"
import { NavLink } from "react-router-dom"

import SignTemplate from "../Generics/SignTemplate"

import { EMAIL_REGEX } from "../../utils/globalConstants"

import getTranslation from "../../utils/getTranslation"

import useForm from "../../hooks/useForm"

import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack, 
  Text,
} from "@chakra-ui/react"
import {
  EmailIcon, 
  LockIcon,
} from "@chakra-ui/icons"


const initialForm = {
  EMAIL: "",
  PASSWORD: "",
}

export default function Login({ login }) {

  const { form, onChangeInput } = useForm(initialForm)
  
  const translation = useMemo(() => getTranslation("en"),[])

  function onLogin() {
    const emailExist = form?.EMAIL && form?.EMAIL.length > 0
    const emailHaveGoodShape = emailExist && EMAIL_REGEX.test(form.EMAIL)

    const passwordExist = form?.PASSWORD && form?.PASSWORD.length > 0

    if(!emailHaveGoodShape || !passwordExist){
      return;
    }
    login(form)
  }

  return (
    <SignTemplate>
      <Heading mb="55"> {translation.CRYPTO_APP}</Heading>

      <Stack spacing="4" display="flex" align="center">
        <InputGroup w="200">
          <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
          <Input 
            type='email'
            placeholder={translation.EMAIL} 
            onChange={e => onChangeInput(e, "EMAIL")}
          />
        </InputGroup>
        <InputGroup w="200">
          <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
          <Input 
            type='password' 
            placeholder={translation.PASSWORD} 
            onChange={e => onChangeInput(e, "PASSWORD")}
          />
        </InputGroup>

        <Flex direction="column" justify="center" align="center">
          <Text>{translation.NO_ACCOUNT}</Text>
          <Text textDecoration="underline" fontStyle="italic">
            <NavLink to="/signup">{`${translation.REGISTER}...`} </NavLink>
          </Text>
        </Flex>
      </Stack>

      <Button w="200px" colorScheme="yellow" color="white" onClick={() => onLogin()}>
        {translation.LOGIN}
      </Button>
    </SignTemplate>
  )
}
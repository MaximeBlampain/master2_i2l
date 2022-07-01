import { useMemo } from "react"
import { NavLink } from "react-router-dom"

import SignTemplate from "../Generics/SignTemplate"

import { EMAIL_REGEX } from "../../utils/globalConstants"

import getTranslation from "../../utils/getTranslation"

import useForm from "../../hooks/useForm"

import {
  Button,
  Flex,
  Select,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack, 
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react"

import {
  EmailIcon, 
  LockIcon,
} from "@chakra-ui/icons"
import {
  FaUserAlt,
  FaFlag,
} from "react-icons/fa"

const initialForm = {
  FIRSTNAME : "",
  LASTNAME : "",
  EMAIL: "",
  PASSWORD: "",
  LANGUAGE_KEY: "EN",
}

export default function Signup({ signup }) {

  const { form, onChangeInput } = useForm(initialForm)

  const translation = useMemo(() => getTranslation(form?.LANGUAGE_KEY),[form?.LANGUAGE_KEY])

  function onSignup() {
    const emailExist = form?.EMAIL && form?.EMAIL.length > 0
    const emailHaveGoodShape = emailExist && EMAIL_REGEX.test(form.EMAIL)

    const passwordExist = form?.PASSWORD && form?.PASSWORD.length > 0
    const firstnameExist = form?.FIRSTNAME && form?.FIRSTNAME.length > 0

    if(!emailHaveGoodShape || !passwordExist || !firstnameExist){
      return;
    }

    signup(form)
  }
  return (
    <SignTemplate>
      <Flex mb="55" direction="column" align="center"> 
        <Heading mb="15">{translation.CRYPTO_APP}</Heading>
        <Text fontSize="1.2rem" fontStyle="italic">{translation.SIGN_UP_NOW}</Text>
      </Flex>

      <Stack spacing="4" display="flex" align="center">
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='text' 
            placeholder={`${translation.FIRSTNAME}*`}
            onChange={e => onChangeInput(e, "FIRSTNAME")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='text' 
            placeholder={translation.LASTNAME} 
            onChange={e => onChangeInput(e, "LASTNAME")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
          <Input 
            type='email' 
            placeholder={`${translation.EMAIL}*`}
            onChange={e => onChangeInput(e, "EMAIL")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
          <Input 
            type='password' 
            placeholder={`${translation.PASSWORD}*`}
            onChange={e => onChangeInput(e, "PASSWORD")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaFlag} color='white'/>} />
          <Select isFullWidth borderRadius="0 0.375rem 0.375rem 0"
            onChange={e => onChangeInput(e, "LANGUAGE_KEY")}
            defaultValue="EN"
          >
            <option value="EN">{translation.EN}</option>
            <option value="FR">{translation.FR}</option>
          </Select>
        </InputGroup>

        <Flex direction="column" justify="center" align="center">
          <Text>{translation.ALREADY_HAVE_AN_ACCOUNT}</Text>
          <Text textDecoration="underline" fontStyle="italic">
            <NavLink to="/login">{`${translation.LOGIN}...`} </NavLink>
          </Text>
        </Flex>
      </Stack>

      <Button w="200px" colorScheme="yellow" color="white" onClick={() => onSignup()}>
        {translation.REGISTER}
      </Button>
    </SignTemplate>
  )
}

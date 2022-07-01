import { useMemo } from 'react'

import { EMAIL_REGEX } from "../../utils/globalConstants"

import getTranslation from "../../utils/getTranslation"

import useForm from "../../hooks/useForm"
import { Center, Container } from '@chakra-ui/react'

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

export default function Profile({
  USER_ID,
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  LANGUAGE_KEY,
  onUpdateProfile,
  onDeleteProfile,
}) {
  const initialForm = {
    FIRSTNAME,
    LASTNAME,
    EMAIL,
    LANGUAGE_KEY,
  }

  const { form, onChangeInput } = useForm(initialForm)
  const translation = useMemo(() => getTranslation(form?.LANGUAGE_KEY),[form?.LANGUAGE_KEY])

  const update = () => {
    const fieldsToEdit = {}
    Object.keys(form).forEach(field => {
      const formField = form[field] ?? ""
      const initialField = initialForm[field] ?? ""
      
      if(formField !== initialField){
        fieldsToEdit[field] = formField
      }
    })

    if(Object.keys(fieldsToEdit).length === 0) return;

    if(fieldsToEdit?.EMAIL && !EMAIL_REGEX.test(fieldsToEdit?.EMAIL)) return;
    onUpdateProfile({
      USER_ID,
      fieldsToEdit,
    })
  }

  const deleteProfile = () => {
    const choice = confirm(translation?.DO_YOU_WANT_TO_DELETE_YOUR_ACCOUNT)
    console.log('choice', choice)
    if(choice){
      onDeleteProfile({USER_ID})
    }
  }

  return (
    <Flex h="calc(100vh - 80px)" direction="column" justify="center" align="center">
      <Heading mb="55">{translation.MY_PROFILE}</Heading>
      <Stack spacing="4" display="flex" align="center">
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='text' 
            placeholder={`${translation.FIRSTNAME}*`}
            value={form?.FIRSTNAME}
            onChange={e => onChangeInput(e, "FIRSTNAME")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaUserAlt} color='white'/>} />
          <Input 
            type='text' 
            placeholder={translation.LASTNAME} 
            value={form?.LASTNAME}
            onChange={e => onChangeInput(e, "LASTNAME")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<EmailIcon color='white'/>} />
          <Input 
            type='email' 
            placeholder={`${translation.EMAIL}*`}
            value={form?.EMAIL}
            onChange={e => onChangeInput(e, "EMAIL")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<LockIcon color='white'/>} />
          <Input 
            type='password' 
            placeholder={`${translation.PASSWORD}`}
            onChange={e => onChangeInput(e, "PASSWORD")}
          />
        </InputGroup>
        <InputGroup w="100%">
          <InputLeftAddon bg="yellow.400" children={<Icon as={FaFlag} color='white'/>} />
          <Select isFullWidth borderRadius="0 0.375rem 0.375rem 0"
            onChange={e => onChangeInput(e, "LANGUAGE_KEY")}
            value={form?.LANGUAGE_KEY}
          >
            <option value="EN">{translation.EN}</option>
            <option value="FR">{translation.FR}</option>
          </Select>
        </InputGroup>
      </Stack>
      <Flex mt="55">
        <Button borderRightRadius="0" w="200px" colorScheme="yellow" color="white" onClick={() => update()}>
          {translation.EDIT}
        </Button>
        <Button borderLeftRadius="0" w="200px" colorScheme="red" color="white" onClick={() => deleteProfile()}>
          {translation.DELETE_ACCOUNT}
        </Button>
      </Flex>
    </Flex>
  )
}

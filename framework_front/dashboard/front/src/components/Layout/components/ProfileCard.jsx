import {useState} from "react";
import {
  Avatar,
  Button,
} from "@chakra-ui/react";

export default function ProfileCard(){
  return (
    <Button colorScheme="yellow">
      <Avatar mr="3" size='sm' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
      Ryan Florence
    </Button>
  )
}
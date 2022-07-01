import {useState} from "react";
import {
  Avatar,
  Button,
} from "@chakra-ui/react";

export default function ProfileCard({ userName }){
  return (
    <Button colorScheme="yellow">
      {userName}
    </Button>
  )
}
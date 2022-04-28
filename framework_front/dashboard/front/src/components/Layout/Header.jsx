import {NavLink} from "react-router-dom";
import {Button, Flex} from "@chakra-ui/react";

import ProfileCard from "./components/ProfileCard";

export default function Header() {
  return(
    <Flex p="5" bg="#353535"  justifyContent="space-evenly">
      <NavLink to="/" >
        <Button colorScheme="yellow"> Dashboard  </Button>
      </NavLink>
      <NavLink to="/wallet">
        <Button colorScheme="yellow"> Wallet  </Button>
      </NavLink>
      <NavLink to="/profile">
        <ProfileCard />
      </NavLink>
      <Button colorScheme='red'>
        Déconnexion
      </Button>
    </Flex>
  )
}
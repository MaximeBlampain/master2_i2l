import {Flex} from "@chakra-ui/react";
import Header from "./Header";

export default function Layout({
  children,
}) {
  return (
    <Flex id="layout_container" direction="column">
      <Header />
      { children }
    </Flex>
  )
}
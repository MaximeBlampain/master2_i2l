import {Flex, Heading} from "@chakra-ui/react";

import { VictoryPie } from "victory-pie";

export default function MyAssets({
  cryptoAssets,
  translation,
}){

  const data= cryptoAssets.map(asset => (
    {x: asset.SYMBOL.toUpperCase(), y: asset.NUMBER_TOKEN}
  ))
  return (
    <Flex direction="column" align="center">
      <Heading>{translation?.MY_ASSETS}</Heading>
      <VictoryPie data={data} innerRadius={75} />
    </Flex>
  )
}
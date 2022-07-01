import {Flex, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";


export default function CryptoList({cryptoList, translation}){
  return (
    <Flex direction="column" align="center">
      <Heading>{translation?.CRYPTO_LIST_ACCEPTED}</Heading>
      <TableContainer overflowY="scroll" maxH="calc(80vh - 80px)">
        <Table variant="striped" colorScheme="yellow" size='sm'>
          <Thead>
            <Tr>
              <Th>{translation?.ICON}</Th>
              <Th>{translation?.SYMBOL}</Th>
              <Th>{translation?.NAME}</Th>
              <Th>{translation?.ACTUAL_PRICE}</Th>
              <Th>{translation?.VARIATION_24H}</Th>
              <Th>{translation?.VARIATION_7D}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cryptoList.map(crypto => (
              <Tr key={crypto.symbol}>
                <Td><Image src={crypto.image} /></Td>
                <Td>{crypto.symbol.toUpperCase()}</Td>
                <Td>{crypto.name}</Td>
                <Td>{crypto.actual_price_eur}</Td>
                <Td>{PercentageRenderer(crypto.price_change_24h)}</Td>
                <Td>{PercentageRenderer(crypto.price_change_7d)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

function PercentageRenderer(percent){
  if(percent < 0){
    return <Text color="red">{percent} %</Text>
  } else {
    return <Text color="green">{percent} %</Text>
  }
}
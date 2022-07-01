import {Button, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";

export default function WalletList({
   translation,
   cryptoAssets,
   cryptoList,
   deleteAsset,
  }){
  const assets = cryptoAssets.map(asset => {
    const cryptoAsset = cryptoList.find(crypto => crypto.symbol === asset.SYMBOL)

    return {
      id: asset.ASSET_ID,
      icon: cryptoAsset.image,
      symbol : asset.SYMBOL.toUpperCase(),
      name: cryptoAsset.name,
      variation_24h: cryptoAsset.price_change_24h,
      variation_7d: cryptoAsset.price_change_7d,
      ucp: asset.PURCHASE_PRICE,
      nb_token: asset.NUMBER_TOKEN
    }
  })

  function onDeleteAsset(id){
    const choice = confirm(translation?.DO_YOU_WANT_TO_DELETE_THIS_ASSET)
    if(choice) deleteAsset({ASSET_ID: id})
  }

  return (
    <TableContainer mt="10" overflowY="scroll" maxH="calc(60vh - 80px)">
      <Table variant="striped" colorScheme="yellow" size='sm'>
        <Thead>
          <Tr>
            <Th>{translation?.ICON}</Th>
            <Th>{translation?.SYMBOL}</Th>
            <Th>{translation?.NAME}</Th>
            <Th>{translation?.VARIATION_24H}</Th>
            <Th>{translation?.VARIATION_7D}</Th>
            <Th>{translation?.UNIT_COST_PRICE}</Th>
            <Th>{translation?.NUMBER_OF_TOKEN}</Th>
            <Th>{translation?.ACTIONS}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {assets.map(asset => (
            <Tr key={asset.id}>
              <Td><Image src={asset.icon} /></Td>
              <Td>{asset.symbol}</Td>
              <Td>{asset.name}</Td>
              <Td>{PercentageRenderer(asset.variation_24h)}</Td>
              <Td>{PercentageRenderer(asset.variation_7d)}</Td>
              <Td>{asset.ucp}</Td>
              <Td>{asset.nb_token}</Td>
              <Td>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => onDeleteAsset(asset.id)}
                >
                  {translation?.DELETE}
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
function PercentageRenderer(percent){
  if(percent < 0){
    return <Text color="red">{percent} %</Text>
  } else {
    return <Text color="green">{percent} %</Text>
  }
}

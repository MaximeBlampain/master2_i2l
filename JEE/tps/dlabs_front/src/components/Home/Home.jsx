import { useEffect, useState } from 'react'
import axios from "axios"

import Card from './components/card'

import {
  Container,
} from './style'

export default function Home() {

  /** State **/
  const [deals, setDeals] = useState([])

  useEffect(() => {
    getFromApi()
  },[])

  async function getFromApi() {
    const response = await axios.get(
      "http://localhost:8080/deal/all"
    ).then(response => response.data)

    setDeals(response)
  }

  return (
    <Container>
      {deals 
        ? deals.map(deal => <Card {...deal}/>)
        : <h2>No deals to show</h2>
      }
    </Container>
  )
}
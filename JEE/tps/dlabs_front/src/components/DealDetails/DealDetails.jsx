import { useEffect, useState } from 'react'
import axios from "axios"

import Card from './components/card'

import {
  Container,
  CardContainer,
} from './style'

export default function DealDetails() {

  /** State **/
  const [deal, setDeal] = useState({})

  useEffect(() => {
    getFromApi()
  },[])

  async function getFromApi() {
    const id = window.location.pathname.split("/details/")[1]

    const response = await axios.get(
      `http://localhost:8080/deal/${id}`
    ).then(response => response.data)
    
    setDeal(response)
  }

  return (
    <Container>
      <CardContainer>
        <Card {...deal} />  
        <div id="promo_code"> { deal.promoCode } </div>
        <div id="discount"> 
          <span id="oldPrice">{ deal.oldPrice } €</span>
          &gt;
          <span id="newPrice">{ deal.newPrice } €</span>
          <span>({ parseFloat(deal.discount).toFixed(2) }% de remise)</span>
        </div>
        <div id="description">
          <span>{ deal.description }</span>
        </div>
      </CardContainer>
    </Container>
  )
}
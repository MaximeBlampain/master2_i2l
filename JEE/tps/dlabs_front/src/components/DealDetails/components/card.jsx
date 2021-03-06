import moment from 'moment'

import noContent from "../../../assets/no-content.png"

import {
  Container,
  Image,
  InformationsContainer,
  DateBtnContainer,
} from "./card.style"

export default function Card({
  creator,
  date,
  id,
  imageUrl,
  shopLink,
  shopName,
  temperature,
  title,
}) {
  console.log("imageUrl", imageUrl)
  return (
    <Container>
      <Image src={noContent} />
      <InformationsContainer>
        <h1 id={temperature < 0 ? "cold" : "hot"}>{ temperature }°</h1>
        <h3>{ title }</h3>
        <h4 id="author_shop"> 
        { creator } | { shopName }
        </h4>
      </InformationsContainer>
      <DateBtnContainer>
        <span id="date">{ moment(date).format("DD/MM/YYYY") }</span>
        <a target="_blank" href={ shopLink } rel="noopener noreferrer">Voir</a>
      </DateBtnContainer>
    </Container>
  )
}
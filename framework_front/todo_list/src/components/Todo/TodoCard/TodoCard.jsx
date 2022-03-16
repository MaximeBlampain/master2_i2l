import { useState } from 'react'

// Components
import EditionCard from "./components/editionCard";
import VisualisationCard from "./components/visualisationCard";

// Style
import {
  Card,
  Flex,
} from "rebass"


export default function TodoCard({
  title,
  description,
  image,
  deadline,
  status,
 }) {
  // State
  const [cardStatus, setCardStatus] = useState("edit")
  const [cardProperties, setCardProperties] = useState({
    image: image,
    title: title,
    description: description,
    deadline: deadline,
    status: status,
  })

  const changeCardStatus = status => {
    setCardStatus(status)
  }

  const onChangeCardProperty = (event, property) => {
    setCardProperties({...cardProperties, [property]: event.target.value})
  }

  return (
    <Card
      width={500}
      my={3}
      px={2}
      py={2}
      sx={{boxShadow: '0 0 16px rgba(0, 0, 0, .25)'}}
      as={"form"}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
      >
        <Flex justifyContent="spaceAround">
          <p onClick={() => changeCardStatus("view")}> View </p>
          <p onClick={() => changeCardStatus("edit")}> Edit </p>
        </Flex>
        {cardStatus === "view"
          ? <VisualisationCard card={cardProperties}/>
          : <EditionCard
              card={cardProperties}
              onChangeProperty={onChangeCardProperty}
          />
        }
      </Flex>
    </Card>
  )
}
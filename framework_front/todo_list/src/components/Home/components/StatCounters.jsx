import { Children } from "react"
import Counter from "./Counter";
import {Flex} from "@chakra-ui/react";

const statusCard = {
  todo: {
    color: "#9DCDC0",
    text: "A Faire"
  },
  wip: {
    color: "#FF8C42",
    text: "En cours"
  },
  done: {
    color: "#C1292E",
    text: "Terminé"
  }
}

export default function StatCounters({counters}) {
  return (
    <Flex paddingTop={50}>
      {Children.toArray(Object.keys(counters).map(key => {
        const {color, text} = statusCard[key]
        const value = counters[key]
        return <Counter
          color={color}
          text={text}
          value={value}
        />
      }))}
    </Flex>
  )
}
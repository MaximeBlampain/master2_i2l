import FR from "../assets/traduction/fr.json"
import EN from "../assets/traduction/en.json"

export default function (code = ""){
  switch(code){
    case "fr":
      return FR
    case "en":
      return EN
  }
}
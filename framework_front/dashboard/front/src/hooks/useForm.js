import { useState } from "react"

export default function useForm(initialForm) {
  const [form, setForm] = useState(initialForm ?? {})

  const onChangeInput = (e, key) => {
    // if not an html input
    if(e?.target?.value === undefined){
      return;
    }
    setForm(previousForm => ({
      ...previousForm,
      [key] : e.target.value
    }))
  } 

  return {
    form,
    onChangeInput,
  }
}

export default function (url, options) {
  return fetch(url, options)
    .then(response => {
      if(response.status >= 400){
        throw new Error("Error with request response")
      }
      else if(response.status === 204){
        return "Delete successfull"
      }
      else {
        return response.json()
      }
    })
}

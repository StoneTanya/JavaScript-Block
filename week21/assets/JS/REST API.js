// https://jsonplaceholder.typicode.com/
// https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
// https://t.me/devlogirl/127
// https://www.postman.com/
// https://graphql.org/
//https://ru.wikipedia.org/wiki/OpenAPI_(%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F)


let CharactersResponse = {
  "code": "int",
  "status": "string",
  "copyright": "string",
  "attributionText": "string",
  "attributionHTML": "string",
  "data": {
    "offset": "int",
    "limit": "int",
    "total": "int",
    "count": "int",
    "results": [
      {
        "id": "int",
        "name": "string",
        "description": "string",
        "modified": "Date",
        "resourceURI": "string",
        "urls": [
          {
            "type": "string",
            "url": "string"
          }
        ],
        "thumbnail": {
          "path": "string",
          "extension": "string"
        },
        "comics": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "stories": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "type": "string"
            }
          ]
        },
        "events": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "series": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        }
      }
    ]
  },
  "etag": "string"
}


class MarvelManager {
  MARVEL_TOKEN = "bf42fd418ca549195643e95f71fd621c"
  MARVEL_URL = "https://gateway.marvel.com:443/v1/public/"

  async getData(path, params) {
    let query = new URLSearchParams({...params, apikey: this.MARVEL_TOKEN})
    console.log(query, "" + query)
    let url = `${this.MARVEL_URL}${path}?` + query
    const response = await fetch(url)
    return await response.json()
  }

  async getCharacters(nameStartsWith="", name="") {
    let path = 'characters'
    let params = {}
    if (nameStartsWith) {
      params["nameStartsWith"] = nameStartsWith
    }
    if (name) {
      params['name'] = name
    }
    return await this.getData(path, params)
  }
}

function getHTMLContent(el) {
  let div = document.createElement("div")
  div.classList.add('pl-3')
  console.log("start", el)
  if (typeof el !== 'array' && typeof el !== 'object') {
    div.innerHTML = el
    console.log("basic", div)
    return div
  }
  for (let prop in el) {
    div.innerHTML += `<div>${prop}</div>`
    div.append(getHTMLContent(el[prop]))
    console.log("loop", div)
  }
  return div
}

let marvel = new MarvelManager()
marvel.getCharacters(nameStartsWith="Iron").then(response => {
  result = response.data.results
  let div = getHTMLContent(result)
  document.getElementById("app").append(div)
})

let localLink = "http://localhost:4222/api"
let liveLink = "https://jhubbsportfolio.herokuapp.com/api"

let apiLink = localLink
//let apiLink = liveLink

let apiPath = (path) => {
    return apiLink + path
}

export default apiPath
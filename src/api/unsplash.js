import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID JJd9L0RWRCYAAxI5JClfYFwloAmETCMl-QJFenPKP1k",
      }
})
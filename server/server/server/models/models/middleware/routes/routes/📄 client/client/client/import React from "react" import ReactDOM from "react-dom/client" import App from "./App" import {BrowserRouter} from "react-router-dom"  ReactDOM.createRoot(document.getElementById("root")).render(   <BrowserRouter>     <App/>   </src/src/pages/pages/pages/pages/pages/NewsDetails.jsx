import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

const API = "http://localhost:5000/api"

export default function NewsDetails(){
  const {id}=useParams()
  const [news,setNews]=useState({})

  useEffect(()=>{
    axios.get(`${API}/news/${id}`)
    .then(res=>setNews(res.data))
  },[id])

  return(
    <div>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
    </div>
  )
}

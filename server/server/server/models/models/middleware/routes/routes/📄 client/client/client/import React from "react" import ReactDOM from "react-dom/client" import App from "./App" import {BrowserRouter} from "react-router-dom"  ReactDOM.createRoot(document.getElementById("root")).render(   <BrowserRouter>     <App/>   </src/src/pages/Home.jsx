import {useEffect,useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const API = "http://localhost:5000/api"

export default function Home(){
  const [news,setNews] = useState([])

  useEffect(()=>{
    axios.get(`${API}/news`)
    .then(res=>setNews(res.data))
  },[])

  return(
    <div>
      <h1>Latest News</h1>
      {news.map(n=>(
        <div key={n._id}>
          <Link to={`/news/${n._id}`}>
            <h2>{n.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

import {useState} from "react"
import axios from "axios"

const API = "http://localhost:5000/api"

export default function Dashboard(){
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  const createNews=async()=>{
    const token = localStorage.getItem("token")
    await axios.post(`${API}/news`,
      {title,description},
      {headers:{Authorization:token}}
    )
    alert("News Created")
  }

  return(
    <div>
      <h1>Dashboard</h1>
      <input placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
      <textarea placeholder="Description" onChange={e=>setDescription(e.target.value)}/>
      <button onClick={createNews}>Publish</button>
    </div>
  )
}

import {useState} from "react"
import axios from "axios"

const API = "http://localhost:5000/api"

export default function Register(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleRegister=async()=>{
    await axios.post(`${API}/auth/register`,{name,email,password})
    alert("Registered Successfully")
  }

  return(
    <div>
      <h1>Register</h1>
      <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

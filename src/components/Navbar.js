import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import style from "./style.navbar.css"

export default function Navbar() {
const [find,setFind] = useState("")

const navigate = useNavigate();

const handleChange = (e)=>{
    setFind(e.target.value)
}
    const handleSubmit=(e)=>{
        navigate(`/search/${find}`, {replace:true})
        e.preventDefault()
    }

    return( <div className="Navbar">
        
        <button class="fa-sharp fa-solid fa-house" onClick={()=>(navigate("/"))}/>
        <p>Movies Media</p>
        <form onSubmit={handleSubmit}>
            <input className="Find" type="text" onChange={handleChange} value={find} placeholder="Busscar pelicula"/>
            <input type="submit" value="Buscar" />
        </form>
    </div>)
}
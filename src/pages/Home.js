import React, {useState} from 'react'
import {useNavigate} from "react-router-dom" 
import {start} from "./GameFunction.js"
import { vision } from "./GameFunction.js";

 export var exportingname 

  function Home() {

    const navigate = useNavigate()
     const [name, setName] = useState("")
     const [showBtn,setShowBtn] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      exportingname = name
      start(exportingname)
      setTimeout(()=>{
        setShowBtn(!showBtn);
      },5000)
    }    


    return (
    
    <div className="App">
         <div>
    {showBtn && <button className = "GotoData" onClick = {()=> {navigate("/GameInfo")}}>Go to Data</button>}
   </div>

      <h1 className = "Title">League of Legends </h1>
      <form onSubmit = {handleSubmit}>
      <input className = "inputbox" onChange = {(e)=> setName(e.target.value)} type="text" placeholder='Enter your GameID' />
      <input className = "SubmitData" type = "submit"/>
      </form>
    </div>
    );
  }
  export default Home;
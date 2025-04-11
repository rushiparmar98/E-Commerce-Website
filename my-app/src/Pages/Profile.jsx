import {useState, useEffect} from 'react';
import CustomButton from "../Reusable/Custombutton";




function Profile() {
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("names")) || [] ;// Local storage se data fetch karo
    if (stored.length > 0) {
      setSavedName(stored);    						// State me data set karo
    }
  }, []);
  



  const [name , setName] = useState("")
  const [savedName, setSavedName] = useState([]);     
  
  


const handleChange = (e) => {
setName(e.target.value)
}

const handleSave = () => {
  if (name.trim() === "") {
    return;
  }
const totaltname = [...savedName, name];
localStorage.setItem("names", JSON.stringify(totaltname)); // Local storage me data store karo
setSavedName(totaltname);
setName("")
}

const handleRemove = (kapes) => {

const newNames = savedName.filter((x)=>x !== kapes);
localStorage.setItem("names", JSON.stringify(newNames)); // Local storage se data remove karo
setSavedName(newNames);
}


const handleRemoveAll = () => {

  localStorage.removeItem("names"); 
  setSavedName([]);
  
}

const handleCustomClick = () => {

alert("Custom Button Clicked")

}

  return (

<>

<h1>I am a profile page</h1>

<input type="text" placeholder="Please enter your name" value={name} onChange={handleChange}/><br/>

<button onClick={handleSave}>Save</button><br/>



<ul>{savedName.map((x,index)=>(<li key={index}>{x} <button onClick={()=>handleRemove(x)}>Remove</button></li>))}</ul>

<br/>

<button onClick={handleRemoveAll}>Remove ALL</button>

<br/>

<CustomButton color="bg-red-500" onClick={handleCustomClick} label="james" />

</>


  )



}

export default Profile;

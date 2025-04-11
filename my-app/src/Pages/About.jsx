import { useNavigate } from "react-router-dom"


function About() {
const Navgate = useNavigate();

const HandClick = () => {
    Navgate("/")
}


  return (
    <>
  <button type="button" className="top-0.5 font-semibold text-white border-2 font-sans bg-[#001F3F] rounded-lg p-2" onClick={HandClick}> Home </button>
    
    <h3 className="text-neutral-800 font-light text-center font-sans">We are E-com Company</h3>

    
    
    
    </>
  )
}

export default About
import { useNavigate } from "react-router-dom"
import  ProductsDummyData  from "../Dummydata/ProductsDummyData"
import Card from "../Reusable/Card"


function Othersproduct() {

    const naV = useNavigate()


    const handleClickH = () => {
    
        naV("/")
    }
    
    const handleClickP = () => {
    
        naV("/product")
    }


  return (
    <>
    <div className="flex flex-row gap-2 m-4"> 

<button className=" top-0.5 font-semibold text-white border-2 font-sans bg-[#001F3F] rounded-lg p-2" onClick={handleClickH}>Home</button>

<button className=" top-0.5 font-semibold text-white border-2 font-sans bg-[#001F3F] rounded-lg p-2" onClick={handleClickP}>Back to categories</button>
</div>


<div className="container mx-auto p-4">

<h1 className="text-2xl font-bold mb-4">Our Products</h1>

<div className="grid grid-cols-2 gap-2 m-2 p-2 sm:grid-cols-3">{ProductsDummyData.map((x)=><Card key={x.id} ImageUrl={x.image} Prouctname={x.name} ProductDescription={x.category} Price={x.price} ButtonName={"Browse All Products"}/>)}</div>



</div>



    
    
    
    </>
  )
}

export default Othersproduct
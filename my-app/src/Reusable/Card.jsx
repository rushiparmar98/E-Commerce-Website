
import PropTypes from "prop-types"

function Card(props) {


  return (
    <>
    <div className="border p-4 shadow-md rounded-lg">
    <img src={props.ImageUrl} alt={props.Prouctname} className="w-full h-48 object-cover rounded-lg mb-2" />
      <h2 className="text-lg font-bold">{props.Prouctname}</h2>
      <p className="text-gray-600">{props.ProductDescription}</p>
      <p className="text-amber-600 font-semibold">{props.Price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-amber-950 transition">
        {props.ButtonName}
      </button>
      
    </div>
    
    </>
  )
}

Card.propTypes = {
  Prouctname: PropTypes.string.isRequired,
  ProductDescription: PropTypes.string.isRequired,
  Price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ImageUrl: PropTypes.string.isRequired,
  ButtonName : PropTypes.string.isRequired,

};

export default Card;
import { useNavigate } from "react-router-dom";

function Cart() {
const homeNav = useNavigate();

const HomeFunc = () => {
  homeNav("/")
}


  return (
    <>
      <div>
        <h1>I am a Cart Page</h1>
      </div>
      <button onClick={HomeFunc}>Home</button>


    </>
  );
}

export default Cart;

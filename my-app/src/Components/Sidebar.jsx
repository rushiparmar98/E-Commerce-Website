import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="w-1/4 bg-gray-800 text-white p-4 h-screen">
        <ul className="flex flex-col gap-[10px]">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  
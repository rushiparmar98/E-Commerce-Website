

import PropTypes from 'prop-types';

function CustomButton(props) {

// const {label, color, functforClick} = props; // Destructuring props
// const customClick = () => {
//   alert("Custom Button Clicked")        
// }


  return (
    <>
      <button className={`${props.color} text-white`} onClick={props.onClick}>{props.label}</button>
    </>
  );

}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func, 
};

export default CustomButton;
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, color: "white" }}
        className="btn py-1 px-2"
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Add New",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

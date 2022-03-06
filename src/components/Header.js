import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, color, onAdd, showAdd }) => {
  return (
    <header className="py-3 d-flex justify-content-between align-items-baseline">
      <h1 style={{ color: color }}>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  color: "green",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

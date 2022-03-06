const Cancel = ({ onDelete, id }) => {
  return (
    <p
      style={{
        float: "right",
        color: "red",
        cursor: "pointer",
        marginRight: "5px",
        fontWeight: "bold",
      }}
      onClick={() => onDelete(id)}
    >
      x
    </p>
  );
};

export default Cancel;

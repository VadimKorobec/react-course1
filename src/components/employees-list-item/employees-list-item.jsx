import "./employees-list-item.css";

const EmployeesListItem = ({
  id,
  name,
  salary,
  increase,
  rise,
  onDelete,
  onToggleIncrease,
  onToggleRise,
}) => {
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        style={{ fontSize: "40px" }}
        onClick={() => onToggleRise(id)}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => onToggleIncrease(id)}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

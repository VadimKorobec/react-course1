import React from "react";
import "./employees-list-item.css";

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = (id) => {
    this.setState((prevState) => ({ increase: !prevState.increase }));
    this.props.onToggleIncrease(id);
  };

  onRise = (id) => {
    this.setState((prevState) => ({ rise: !prevState.rise }));
    this.props.onToggleRise(id);
  };

  render() {
    const { name, salary, onDelete, id } = this.props;
    const { increase, rise } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span onClick={() => this.onRise(id)} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={() => this.onIncrease(id)}
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
  }
}

export default EmployeesListItem;

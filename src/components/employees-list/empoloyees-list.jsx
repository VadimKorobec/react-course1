import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => (
        <EmployeesListItem
          key={item.id}
          {...item}
          onDelete={onDelete}
          onToggleIncrease={onToggleIncrease}
          onToggleRise={onToggleRise}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;

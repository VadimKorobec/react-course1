import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => (
        <EmployeesListItem key={item.id} {...item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default EmployeesList;

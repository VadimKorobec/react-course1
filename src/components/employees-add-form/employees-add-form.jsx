import { useState } from "react";
import "./employees-add-form.css";

const EmployessAddForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "" || !this.state.salary.trim()) {
      return;
    }
    onAddItem({ name, salary });
    reset();
  };

  const reset = () => {
    setName("");
    setSalary("");
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={handleSubmit} className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={handleSalaryChange}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployessAddForm;

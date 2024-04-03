import React from "react";
import { nanoid } from "nanoid";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployessAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/empoloyees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends React.Component {
  state = {
    data: [
      { id: "1", name: "John.S", salary: 1000, increase: false },
      { id: "2", name: "Tom.P", salary: 800, increase: true },
      { id: "3", name: "Oleg.H", salary: 290, increase: false },
    ],
  };

  handleDeleteItem = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((item) => item.id !== id),
    }));
  };

  handleAddItem = (data) => {
    const { name, salary } = data;
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        { id: nanoid(), name, salary, increase: false },
      ],
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList onDelete={this.handleDeleteItem} data={data} />
        <EmployessAddForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;

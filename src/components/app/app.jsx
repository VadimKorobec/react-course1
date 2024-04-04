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
      { id: "1", name: "John.S", salary: 1000, increase: false, rise: false },
      { id: "2", name: "Tom.P", salary: 800, increase: false, rise: false },
      { id: "3", name: "Oleg.H", salary: 290, increase: false, rise: false },
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
        { id: nanoid(), name, salary, increase: false, rise: false },
      ],
    }));
  };

  handleToggleIncrease = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            increase: !item.increase,
          };
        }
        return item;
      }),
    }));
  };

  handleToggleRise = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            rise: !item.rise,
          };
        }
        return item;
      }),
    }));
  };

 

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo  data={data} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          onToggleIncrease={this.handleToggleIncrease}
          onToggleRise={this.handleToggleRise}
          onDelete={this.handleDeleteItem}
          data={data}
        />
        <EmployessAddForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;

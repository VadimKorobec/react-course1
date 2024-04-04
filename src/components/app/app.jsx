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
    term: "",
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

  handleSearchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  handleUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  render() {
    const { data, term } = this.state;
    const visibleData = this.handleSearchEmp(data, term);
    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-panel">
          <SearchPanel onSearch={this.handleUpdateSearch} />
          <AppFilter />
        </div>
        <EmployeesList
          onToggleIncrease={this.handleToggleIncrease}
          onToggleRise={this.handleToggleRise}
          onDelete={this.handleDeleteItem}
          data={visibleData}
        />
        <EmployessAddForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;

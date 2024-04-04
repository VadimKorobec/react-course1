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
    filter: "",
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

  handleSearchEmp = (data, term) => {
    if (term.length === 0) {
      return data;
    }
    // this.setState((prevState) => ({
    //   data: prevState.data.filter((item) => item.name.indexOf(term) > -1),
    // }));

    return data.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  handleUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  handleFilterPost = (data, filter) => {
    switch (filter) {
      case "rise":
        return data.filter((item) => item.rise);
      case "salary":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  handlerFilterSelect = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.handleFilterPost(
      this.handleSearchEmp(data, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-panel">
          <SearchPanel onSearch={this.handleUpdateSearch} />
          <AppFilter onFilter={this.handlerFilterSelect} filter={filter} />
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

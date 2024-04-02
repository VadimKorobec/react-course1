import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployessAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/empoloyees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

function App() {
  const data = [
    { name: "John", surname: "Smith", salary: 1000, increase: false },
    { name: "Tom", surname: "Poor", salary: 800, increase: true },
    { name: "Oleg", surname: "Hithand", salary: 290, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployessAddForm />
    </div>
  );
}

export default App;

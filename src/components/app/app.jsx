import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployessAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/empoloyees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

function App() {
  const data = [
    { id: "1", name: "John.S", salary: 1000, increase: false },
    { id: "2", name: "Tom.P", salary: 800, increase: true },
    { id: "3", name: "Oleg.H", salary: 290, increase: false },
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

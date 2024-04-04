import "./app-filter.css";

const AppFilter = ({ filter, onFilter }) => {
  const buttonData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "salary", label: "З/П больше 1000$" },
  ];

  return (
    <div className="btn-group">
      {buttonData.map((item, i) => (
        <div key={i}>
          <button
            className={
              filter === item.name ? "btn btn-light" : "btn btn-outline-light"
            }
            type="button"
            onClick={() => onFilter(item.name)}
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className="btn-group">

  //     <button className="btn btn-outline-light" type="button">
  //       На повышение
  //     </button>
  //     <button className="btn btn-outline-light" type="button">
  //       З/П больше 1000$
  //     </button>
  //   </div>
  // );
};

export default AppFilter;

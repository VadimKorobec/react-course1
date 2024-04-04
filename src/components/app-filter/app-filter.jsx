import "./app-filter.css";

const AppFilter = () => {
  const buttonData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "salary", label: "З/П больше 1000$" },
  ];

  return (
    <ul className="btn-group">
      {buttonData.map((item, i) => (
        <li key={i}>
          <button className="btn btn-light" type="button">
            {item.label}
          </button>
        </li>
      ))}
    </ul>
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

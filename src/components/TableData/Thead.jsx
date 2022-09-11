const Thead = ({ columns }) => {
  return (
    <thead className="Thead">
      <tr>
        {columns.map((column) => {
          if (column === "PVI") return null;
          return <th key={column}>{column === "Time" ? "" : column}</th>;
        })}
      </tr>
    </thead>
  );
};

export default Thead;

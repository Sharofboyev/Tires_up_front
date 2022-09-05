const Thead = ({ columns }) => {
  return (
    <thead className="Thead">
      <tr>
        {columns.map((column) => {
          if (column.Header === "id") return null;
          return (
            <th key={column.Header}>
              {column.Header === "Time" ? "" : column.Header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Thead;

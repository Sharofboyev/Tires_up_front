const Thead = ({ columns }) => {
  return (
    <thead className="Thead">
      <tr>
        {columns.map((column) => {
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

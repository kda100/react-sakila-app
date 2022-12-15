function TableHeader(props) {
  return (
    <thead>
      <tr>
        {props.tableHeaders.map((tableHeader, index) => (
          <th key={index}>{tableHeader}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

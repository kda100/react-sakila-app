import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";

function CustomTable(props) {
  return (
    <Table striped bordered hover>
      <TableHeader tableHeaders={props.tableHeaders} />
      {props.children}
    </Table>
  );
}

export default CustomTable;

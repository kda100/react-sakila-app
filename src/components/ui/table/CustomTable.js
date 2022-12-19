import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import Loading from "../Loading";
import Error from "../Error";
import useItemsState from "../../../hooks/useItemsState";
import React from "react";

/**
 * Wrapper table component
 */

function CustomTable(props) {
  const itemsState = useItemsState(props.itemsSelectorType, props.fetchItems);

  if (itemsState.isLoading) {
    return <Loading />;
  }
  if (itemsState.error != null) {
    return <Error message={itemsState.error} />;
  }

  //React.cloneElement clones children and adds items as a prop.
  return (
    <Table striped bordered hover>
      <TableHeader tableHeaders={props.tableHeaders} />
      {React.cloneElement(props.children, { items: itemsState.items })}
    </Table>
  );
}

export default CustomTable;

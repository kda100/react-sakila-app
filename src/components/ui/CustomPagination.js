import Pagination from "react-bootstrap/Pagination";
import React from "react";
import usePagination from "../../hooks/usePagination";

/**
 * Component to display pages and page numbers and control its state
 */

function CustomPagination(props) {
  const {
    offset: currentOffset,
    totalPages,
    setOffsetHandler,
  } = usePagination(
    props.offsetSelectorType,
    props.totalPagesSelectorType,
    props.itemActions
  );

  let items = [];
  for (let offset = 0; offset < totalPages; offset++) {
    items.push(
      <Pagination.Item
        key={offset}
        active={offset === currentOffset}
        onClick={() => setOffsetHandler(offset)}
      >
        {offset + 1}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
}

export default CustomPagination;

import Pagination from "react-bootstrap/Pagination";
import React from "react";

function CustomPagination(props) {
  let items = [];
  for (let offset = 0; offset < props.totalPages; offset++) {
    items.push(
      <Pagination.Item
        key={offset}
        active={offset === props.currentOffset}
        onClick={() => props.onClickItem(offset)}
      >
        {offset + 1}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
}

export default React.memo(CustomPagination);

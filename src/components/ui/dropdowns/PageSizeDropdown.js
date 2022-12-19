import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";
import React, { useMemo } from "react";

/**
 * Dropdown component for page sizes
 */

function PageSizeDropdown(props) {
  console.log("PageSizeDropdown");

  //stores what page size has been selected.
  const currentPageSize = useMemo(() => {
    console.log("currentPageSize");
    return props.pageSizes.find(
      (pageSize) => pageSize === props.currentPageSize
    );
  }, [props.currentPageSize, props.pageSizes]);

  return (
    <BaseDropdown>
      <DropdownButton id="dropdown-basic-button" title={currentPageSize}>
        <BaseDropdownList>
          {props.pageSizes.map((pageSize, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => props.onClickItem(pageSize)}
            >
              {pageSize}
            </Dropdown.Item>
          ))}
        </BaseDropdownList>
      </DropdownButton>
    </BaseDropdown>
  );
}

export default React.memo(PageSizeDropdown);

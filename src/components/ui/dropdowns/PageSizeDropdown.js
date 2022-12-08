import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";
import React, { useMemo } from "react";

function PageSizeDropdown(props) {
  console.log("New PageSizeDropdown");

  const currentPageSize = useMemo(() => {
    console.log("New PageSize current");
    return props.pageSizes.find(
      (pageSize) => pageSize === props.currentPageSize
    );
  }, [props.currentPageSize]);

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

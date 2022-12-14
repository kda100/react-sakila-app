import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";

/**
 * Dropdown component for sort bys
 */

function SortByDropdown(props) {
  console.log("SortByDropdown");

  //stores what sort by has been selected.
  const currentSortBy = useMemo(() => {
    console.log("currentSortBy");
    return props.items.find((item) => item.sortBy === props.currentSortBy).name;
  }, [props.currentSortBy, props.items]);

  return (
    <BaseDropdown>
      <DropdownButton id="dropdown-basic-button" title={currentSortBy}>
        <BaseDropdownList>
          {props.items.map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => props.onClickItem(item.sortBy)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </BaseDropdownList>
      </DropdownButton>
    </BaseDropdown>
  );
}

export default React.memo(SortByDropdown);

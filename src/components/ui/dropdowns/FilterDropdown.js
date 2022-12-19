import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";
import React, { useMemo } from "react";

/**
 * Dropdown component for filters
 */

function FilterDropdown(props) {
  console.log("FilterDropdown");

  //stores what filter has been selected.
  const currentFilter = useMemo(() => {
    console.log("currentFilter");
    return props.items.find((item) => item.id === props.currentId).name;
  }, [props.currentId, props.items]);

  return (
    <BaseDropdown>
      <DropdownButton id="dropdown-basic-button" title={currentFilter}>
        <BaseDropdownList>
          {props.items.map((item) => (
            <Dropdown.Item
              key={item.id}
              onClick={() => props.onClickItem(item.id)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </BaseDropdownList>
      </DropdownButton>
    </BaseDropdown>
  );
}

export default React.memo(FilterDropdown);

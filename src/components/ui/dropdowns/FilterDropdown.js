import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";
import React, { useMemo } from "react";

function FilterDropdown(props) {
  console.log("New FilterDropdown created");

  const currentFilter = useMemo(() => {
    console.log("New FilterDropdown current");
    return props.items.find((item) => item.id === props.currentId).name;
  }, [props.currentId]);

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

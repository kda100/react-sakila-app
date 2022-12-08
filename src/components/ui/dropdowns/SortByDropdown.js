import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";

function SortByDropdown(props) {
  console.log("New SortByDropdown");

  const currentSortBy = useMemo(() => {
    console.log("New SortBy current");
    return props.items.find((item) => item.sortBy === props.currentSortBy).name;
  }, [props.currentSortBy]);

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

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import classes from "./dropdowns.module.css";
import BaseDropdownList from "./BaseDropDownList";

function SortByDropdown(props) {
  return (
    <BaseDropdown>
      <DropdownButton
        id="dropdown-basic-button"
        title={
          props.items.find((item) => item.sortBy === props.currentSortBy).name
        }
      >
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

export default SortByDropdown;

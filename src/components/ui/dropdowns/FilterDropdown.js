import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";

function FilterDropdown(props) {
  return (
    <BaseDropdown>
      <DropdownButton
        id="dropdown-basic-button"
        title={props.items.find((item) => item.id === props.currentId).name}
      >
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

export default FilterDropdown;

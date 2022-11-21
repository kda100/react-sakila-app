import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BaseDropdown from "./BaseDropdownButton";
import BaseDropdownList from "./BaseDropDownList";

function PageSizeDropdown(props) {
  return (
    <BaseDropdown>
      <DropdownButton
        id="dropdown-basic-button"
        title={props.pageSizes.find(
          (pageSize) => pageSize === props.currentPageSize
        )}
      >
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

export default PageSizeDropdown;

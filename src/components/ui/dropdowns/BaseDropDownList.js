import classes from "./dropdowns.module.css";

function BaseDropdownList(props) {
  return <div className={classes.maxHeight}>{props.children}</div>;
}

export default BaseDropdownList;

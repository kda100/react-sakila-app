import classes from "./dropdowns.module.css";

/**
 * Wrapper component for dropdown list components.
 */

function BaseDropdownList(props) {
  return <div className={classes.maxHeight}>{props.children}</div>;
}

export default BaseDropdownList;

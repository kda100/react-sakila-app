import classes from "./styles.module.css";

/**
 * Generic error component
 */

function Error(props) {
  return <div className={classes.center}>{props.message}</div>;
}

export default Error;

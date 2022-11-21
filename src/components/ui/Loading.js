import classes from "./styles.module.css";

function Loading() {
  return (
    <div className={classes.center}>
      <div className="spinner-border" role="status"></div>
    </div>
  );
}

export default Loading;

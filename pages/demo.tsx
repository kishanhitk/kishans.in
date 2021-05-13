import classes from "./demo.module.css";
function demo() {
  return (
    <body className={classes.body}>
      <div className={classes.content}>content</div>
      <footer className={classes.footer}>Footer</footer>
    </body>
  );
}

export default demo;

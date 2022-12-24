import NavBar from "../components/base/NavBar";
import Footer from "../components/base/Footer";
import { Fragment } from "react";

function BasePage(props) {
  return (
    <Fragment>
      <NavBar />
      <main className="m-3">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default BasePage;

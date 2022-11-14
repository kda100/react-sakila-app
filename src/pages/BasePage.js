import NavBar from "../components/base/NavBar";
import Footer from "../components/base/Footer";

function BasePage(props) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="m-3">{props.children}</div>
      <Footer />
    </div>
  );
}

export default BasePage;

import "bootstrap/dist/css/bootstrap.min.css";
import BasePage from "./pages/BasePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import FilmsPage from "./pages/FilmsPage";
import { Provider } from "react-redux";
import store from "./store/index";
import routes from "./constants/routes";
import { filmsRoute } from "./constants/routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasePage>
          <Routes>
            {routes.map((route) => (
              <Route path={route.route} element={route.page} />
            ))}
            <Route path="*" element={<Navigate to={filmsRoute.route} />} />
          </Routes>
        </BasePage>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import BasePage from "./pages/BasePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import routes from "./routing/routes";
import { filmsRoute } from "./routing/routes";
import { Suspense } from "react";
import Loading from "./components/ui/Loading";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasePage>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.route}
                  path={route.route}
                  element={route.page}
                />
              ))}
              <Route path="*" element={<Navigate to={filmsRoute.route} />} />
            </Routes>
          </Suspense>
        </BasePage>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

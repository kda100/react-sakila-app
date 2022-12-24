import routes from "../constants/routes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useCustomNavigation() {
  const location = useLocation();
  const [currRoute, setCurrRoute] = useState(routes[0].route);

  useEffect(() => {
    setCurrRoute(location.pathname);
  }, [location]);

  return currRoute;
}

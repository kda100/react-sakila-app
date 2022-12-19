import useCustomSelector from "./useCustomSelector";
import { useDispatch } from "react-redux";

export default function usePagination(
  offsetSelectorType,
  totalPagesSelectorType,
  itemActions
) {
  const dispatch = useDispatch();
  const offset = useCustomSelector(offsetSelectorType);
  const totalPages = useCustomSelector(totalPagesSelectorType);

  const setOffsetHandler = (offset) => {
    dispatch(itemActions.setOffset(offset));
  };

  return {
    offset,
    totalPages,
    setOffsetHandler,
  };
}

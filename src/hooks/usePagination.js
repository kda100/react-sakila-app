import useCustomSelector from "./useCustomSelector";
import { useDispatch } from "react-redux";

/**
 * Hook to control the state of current page (offset - starts at 0) and total pages.
 * @param {String} offsetSelectorType
 * @param {String} totalPagesSelectorType
 * @param {any} itemActions
 * @returns {{offset: Number, totalPages: Number, setOffsetHandler: (offset: Number) => void}} {offset, total pages, setOffsetHandler}
 */

export default function usePagination(
  offsetSelectorType,
  totalPagesSelectorType,
  itemActions
) {
  const dispatch = useDispatch();
  const offset = useCustomSelector(offsetSelectorType);
  const totalPages = useCustomSelector(totalPagesSelectorType);

  /**
   * Sets offset of items
   * @param {Number} offset
   */
  const setOffsetHandler = (offset) => {
    dispatch(itemActions.setOffset(offset));
  };

  return {
    offset,
    totalPages,
    setOffsetHandler,
  };
}

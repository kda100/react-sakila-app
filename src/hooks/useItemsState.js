import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useCustomSelector from "./useCustomSelector";

export default function useItemsState(itemsSelectorType, fetchItems) {
  const dispatch = useDispatch();
  const itemsState = useCustomSelector(itemsSelectorType);

  useEffect(() => {
    dispatch(fetchItems(itemsState.parameters));
  }, [itemsState.parameters, dispatch, fetchItems]);

  return itemsState;
}

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useCustomSelector from "./useCustomSelector";
import { Dispatch } from "react";

/**
 * Hook to control state of items as well as api fetch calls.
 * @param {String} itemsSelectorType
 * @param {(parameters: { filterId: String, sortBy: String, offset:Number, pageSize: Number }) => ((dispatch: Dispatch<AnyAction>) => void)} fetchItems
 * @returns {any} the items state
 */

export default function useItemsState(itemsSelectorType, fetchItems) {
  const dispatch = useDispatch();
  const itemsState = useCustomSelector(itemsSelectorType);

  useEffect(() => {
    dispatch(fetchItems(itemsState.parameters));
  }, [itemsState.parameters, dispatch, fetchItems]); //fetches items when parameters change

  return itemsState;
}

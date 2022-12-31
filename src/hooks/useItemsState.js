import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useCustomSelector from "./useCustomSelector";
import { Dispatch } from "react";

/**
 * Hook to control state of items as well as api fetch calls.
 * @param {string} itemsSelectorType
 * @param {(parameters: { filterId: string, sortBy: string, offset:number, pageSize: number }) => ((dispatch: Dispatch<AnyAction>) => void)} fetchItems
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

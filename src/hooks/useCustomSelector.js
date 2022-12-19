import { useSelector } from "react-redux";
import * as selectorTypes from "../constants/customSelectorTypes";

/**
 * Extension of useSelectorHook to only return predefined state object
 * @param {String} selectorType
 * @returns {any} the selected state
 */

export default function useCustomSelector(selectorType) {
  let stateFn = (state) => {};
  switch (selectorType) {
    case selectorTypes.filmsType:
      stateFn = (state) => state.films;
      break;
    case selectorTypes.filmParametersType:
      stateFn = (state) => state.films.parameters;
      break;
    case selectorTypes.filmParametersOffsetType:
      stateFn = (state) => state.films.parameters.offset;
      break;
    case selectorTypes.filmTotalPagesType:
      stateFn = (state) => state.films.totalPages;
      break;
    case selectorTypes.customersType:
      stateFn = (state) => state.customers;
      break;
    case selectorTypes.customerParametersType:
      stateFn = (state) => state.customers.parameters;
      break;
    case selectorTypes.customerParametersOffsetType:
      stateFn = (state) => state.customers.parameters.offset;
      break;
    case selectorTypes.customerTotalPagesType:
      stateFn = (state) => state.customers.totalPages;
      break;
    case selectorTypes.categoriesType:
      stateFn = (state) => state.categories;
      break;
    case selectorTypes.countriesType:
      stateFn = (state) => state.countries;
      break;
    default:
      break;
  }
  return useSelector(stateFn);
}

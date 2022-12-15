import createFilterSlice from "../createFilterSlice";

const countriesSlice = createFilterSlice("countries");

export const countryActions = countriesSlice.actions;
export default countriesSlice.reducer;

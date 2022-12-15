import createFilterSlice from "../createFilterSlice";

const categoriesSlice = createFilterSlice("categories");

export const categoryActions = categoriesSlice.actions;
export default categoriesSlice.reducer;

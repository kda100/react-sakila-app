import createItemsSlice from "../createItemsSlice";

const filmsSlice = createItemsSlice("films");

export const filmActions = filmsSlice.actions;
export default filmsSlice.reducer;

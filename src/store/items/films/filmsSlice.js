import createItemsSlice from "../createItemsSlice";
import sortBys from "../../../constants/films/sortBys";

const filmsSlice = createItemsSlice("films", 16, sortBys);

export const filmActions = filmsSlice.actions;
export default filmsSlice.reducer;

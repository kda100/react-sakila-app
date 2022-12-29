import createItemsSlice from "../createItemsSlice";
import sortBys from "../../../constants/customers/sortBys";

const customersSlice = createItemsSlice("customers", 109, sortBys);

export const customerActions = customersSlice.actions;
export default customersSlice.reducer;

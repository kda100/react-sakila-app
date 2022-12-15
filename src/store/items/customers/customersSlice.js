import createItemsSlice from "../createItemsSlice";

const customersSlice = createItemsSlice("customers");

export const customerActions = customersSlice.actions;
export default customersSlice.reducer;

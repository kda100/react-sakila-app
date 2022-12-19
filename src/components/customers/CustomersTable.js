import { fetchCustomers } from "../../store/items/customers/customersActionCreaterThunks";
import tableHeaders from "../../constants/customers/tableHeaders";
import CustomTable from "../ui/table/CustomTable";
import CustomersTableContent from "./CustomersTableContent";
import { customersType } from "../../constants/customSelectorTypes";

function CustomersTable() {
  return (
    <CustomTable
      tableHeaders={tableHeaders}
      itemsSelectorType={customersType}
      fetchItems={fetchCustomers}
    >
      <CustomersTableContent />
    </CustomTable>
  );
}

export default CustomersTable;

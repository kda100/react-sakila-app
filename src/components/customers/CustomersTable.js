import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCustomers } from "../../store/customers/customersActionCreaterThunks";
import tableHeaders from "../../constants/customers/tableHeaders";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import CustomTable from "../ui/table/CustomTable";
import CustomersTableContent from "./CustomersTableContent";

function CustomersTable() {
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers(customersState.parameters));
  }, [customersState.parameters]);

  if (customersState.isLoading) {
    return <Loading />;
  }
  if (customersState.error != null) {
    return <Error message={customersState.error} />;
  }

  return (
    <CustomTable tableHeaders={tableHeaders}>
      <CustomersTableContent customers={customersState.customers} />
    </CustomTable>
  );
}

export default CustomersTable;

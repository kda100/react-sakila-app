import CustomersTable from "../components/customers/CustomersTable";
import CustomersQueryBar from "../components/customers/CustomersQueryBar";
import CustomersPagination from "../components/customers/CustomersPagination";

function CustomersPage() {
  return (
    <div>
      <CustomersQueryBar />
      <CustomersPagination />
      <CustomersTable />
    </div>
  );
}

export default CustomersPage;

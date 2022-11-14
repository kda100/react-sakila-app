import CustomPagination from "../ui/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { customerActions } from "../../store/customers/customersSlice";

function CustomersPagination() {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.customers.parameters.offset);
  const totalPages = useSelector((state) => state.customers.totalPages);

  function setOffset(offset) {
    dispatch(customerActions.setOffset(offset));
  }

  return (
    <CustomPagination
      currentOffset={offset}
      totalPages={totalPages}
      onClickItem={setOffset}
    />
  );
}

export default CustomersPagination;

import CustomPagination from "../ui/CustomPagination";
import usePagination from "../../hooks/usePagination";
import { customerActions } from "../../store/items/customers/customersSlice";
import {
  customerParametersOffsetType,
  customerTotalPagesType,
} from "../../constants/customSelectorTypes";

function CustomersPagination() {
  const { offset, totalPages, setOffsetHandler } = usePagination(
    customerParametersOffsetType,
    customerTotalPagesType,
    customerActions
  );

  return (
    <CustomPagination
      currentOffset={offset}
      totalPages={totalPages}
      onClickItem={setOffsetHandler}
    />
  );
}

export default CustomersPagination;

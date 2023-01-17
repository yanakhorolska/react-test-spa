import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/filterReducer";
import { Input } from "./Products.styled";
import { TextField } from "@mui/material";

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;
    dispatch(addFilter(input));
  };
  return (
    <div>
      <TextField
        onChange={handleChange}
        name="input"
        id="standard-basic"
        label="fill id of product"
        variant="standard"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
    </div>
  );
};

import { useSelector } from "react-redux";
import { useState } from "react";
import { getFilter } from "../../redux/selectors";
import { useGetProductsQuery } from "../../redux/operations";
import { Product } from "../Product/Product";

export const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery(page);
  const { filter } = useSelector(getFilter);

  if (!data) {
    return null;
  }
  const total = data.total;
  const items = data.data;
  const onNext = (e) => {
    if (items.find((item) => item.id === total)) {
      return;
    }
    return setPage(page + 1);
  };
  const onPrevious = () => {
    if (page === 1) {
      return;
    }
    return setPage(page - 1);
  };

  const visibleProducts = () => {
    if (filter) {
      return items.filter((item) => item.id === Number(filter));
    }
    return items;
  };

  return (
    <>
      <ul>
        {visibleProducts().map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
      <div>
        {page === 1 ? (
          <button disabled>Previous</button>
        ) : (
          <button onClick={onPrevious}>Previous</button>
        )}
        {items.find((item) => item.id === total) ? (
          <button disabled>Next</button>
        ) : (
          <button onClick={onNext}>Next</button>
        )}
      </div>
    </>
  );
};

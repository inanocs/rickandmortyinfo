import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Paginator.scss";

const Paginator = ({ pages = 0, center = true, onChange, actualPage }) => {
  const paginatorClasses = {
    root: `paginator ${center ? "paginator--center" : ""}`,
  };

  return pages === 0 ? null : (
    <Pagination
      page={actualPage === undefined ? 1 : Number(actualPage)}
      onChange={onChange}
      count={pages}
      shape="rounded"
      color="primary"
      classes={paginatorClasses}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};

export default Paginator;

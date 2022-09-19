import React from "react";

const TableHeader = ({ columns, sortColumn, raiseSort }) => {
  const onSort = (path) => {
    const sorting = { ...sortColumn };
    if (sorting.path === path) {
      sorting.order = sorting.order === "asc" ? "desc" : "asc";
    } else {
      sorting.path = path;
      sorting.order = "asc";
    }
    raiseSort(sorting);
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => onSort(column.path)}
          >
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

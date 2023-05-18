import React, { FC } from "react";
import clsx from "classnames";
import { TableColumn } from "./index";

interface TableHeaderProps {
  columns: TableColumn[];
}

export const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
    <tr>
      {columns.map((column, index) => (
        <th
          key={index}
          className={clsx('py-3 px-3 bg-amber-700 text-white first-of-type:rounded-tl-3 last-of-type:rounded-tr-3', {
            'text-left': column.align === 'left' || !column.align,
            'text-right': column.align === 'right',
            'text-center': column.align === 'center'
          })}
        >
          {column.title}
        </th>
      ))}
    </tr>
    </thead>
  );
};

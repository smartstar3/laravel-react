import React, { FC, ReactNode } from "react";
import { get } from "lodash";
import clsx from "classnames";
import { TableHeader } from "./TableHeader";
import { Skeleton } from "@/components/Atoms";

export type TableColumn = {
  title: string;
  dataIndex: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  render?: (data?: any) => ReactNode;
  sortable?: boolean;
};

type TableProps = {
  columns: TableColumn[];
  data: any[];
  loading?: boolean;
};

export const Table: FC<TableProps> = ({ columns, data, loading }) => {
  const getCellData = (data: any, column: TableColumn) => {
    if (column.render) return column.render(data);

    if (
      get(data, column.dataIndex) !== undefined ||
      get(data, column.dataIndex) !== null
    )
      return get(data, column.dataIndex);

    return null;
  };

  return (
    <div className="overflow-x-auto shadow rounded-3">
      <table className="w-full">
        <TableHeader columns={columns} />

        <tbody>
        {loading ? (
          <tr className="group odd:bg-white even:bg-amber-100">
            <td
              colSpan={columns.length}
              className="py-3 px-3 group-last-of-type:first-of-type:rounded-bl-3 group-last-of-type:last-of-type:rounded-br-3"
            >
              <div className="py-2">
                {new Array(10).fill(0).map((_, index) => (
                  <Skeleton className="mb-2" key={index} />
                ))}
              </div>
            </td>
          </tr>
        ) : (
          <>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="rounded-b-3 bg-blue-20">
                  <div className="flex h-25 items-center justify-center">
                    No Data
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="group odd:bg-white even:bg-amber-100"
                >
                  {columns.map((column, index) => (
                    <td
                      key={index}
                      className={clsx('py-3 px-3 group-last-of-type:first-of-type:rounded-bl-3 group-last-of-type:last-of-type:rounded-br-3', {
                        'text-right': column.align === 'right',
                        'text-center': column.align === 'center'
                      })}
                    >
                      {getCellData(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </>
        )}
        </tbody>
      </table>
    </div>
  );
};

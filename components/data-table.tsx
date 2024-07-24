"use client";

import { DataTableProps } from "@/types";
import {
  Chip,
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { DeleteIcon } from "../public/DeleteIcon";
import { EditIcon } from "../public/EditIcon";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Ativo: "success",
  Inativo: "danger",
};

const DataTable = ({ columns, data, onEdit, onDelete }: DataTableProps) => {
  const [editId, setEditId] = React.useState();
  const [deleteId, setDeleteId] = React.useState();

  const renderCell = React.useCallback((obj: any, columnKey: React.Key) => {
    const cellValue = obj[columnKey as keyof any];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[obj.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "ações":
        return (
          <div className="relative flex items-center gap-2 justify-center">
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip> */}
            <Tooltip color="secondary" content="Editar">
              <span
                onClick={() => setEditId(obj.id)}
                className="text-lg cursor-pointer active:opacity-50"
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Deletar">
              <span
                onClick={() => setDeleteId(obj.id)}
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  useEffect(() => {
    if (editId) onEdit(editId);
    setEditId(undefined);
  }, [onEdit, editId]);

  useEffect(() => {
    if (deleteId) onDelete(deleteId);
    setDeleteId(undefined);
  }, [onDelete, deleteId]);

  return (
    <Table selectionMode="single" aria-label="tipos">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === "ações" ? "center" : "start"}
          >
            {column.title}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={data}>
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell align="center">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;

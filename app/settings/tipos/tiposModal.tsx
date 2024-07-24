"use client";

import React, { useState } from "react";

import { tipoColumns } from "./columns";
import { TiposModel } from "@/types";
import DataTable from "@/components/data-table";

const TiposModal = ({ data }: { data: TiposModel[] }) => {
  const [editId, setEditId] = useState();
  const [deleteId, setDeleteId] = useState();

  const handleEditId = (key: any) => {
    setEditId(key);
    console.log("id a ser editado: " + key);
  };
  const handleDeleteId = (key: any) => {
    setDeleteId(key);
    console.log("id a ser deletado: " + key);
  };

  return (
    <main className="flex flex-col gap-3">
      <DataTable
        columns={tipoColumns}
        data={data}
        onEdit={handleEditId}
        onDelete={handleDeleteId}
      />
    </main>
  );
};

export default TiposModal;
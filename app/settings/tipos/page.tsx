import React from "react";
import { ContentLayout } from "@/components/sidebar/content-layout";
//import { Table } from "antd";
import TiposModal from "./tiposModal";
import { tipoColumns } from './columns'
import { TiposModel } from "@/types";
import { tipos } from "@/types/testes";

async function getData(): Promise<TiposModel[]> {
  return tipos;
}

const TiposProvider = async () => {

  const data = await getData();

  return (
    <ContentLayout title="Tipos">
      {/* <Table columns={tipoColumns} dataSource={data} rowKey="id"/> */}
      <TiposModal />
    </ContentLayout>
  );
};

export default TiposProvider;

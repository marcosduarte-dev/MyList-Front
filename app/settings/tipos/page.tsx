import React from "react";
import { ContentLayout } from "@/components/sidebar/content-layout";
import TiposModal from "./tiposModal";
import { TiposModel } from "@/types";
import { getTipos } from "@/service/actions/tiposService";

async function getData(): Promise<TiposModel[]> {
  return await getTipos();
}

const TiposProvider = async () => {
  const data = await getData();

  return (
    <ContentLayout title="Tipos">
      {/* <Table columns={tipoColumns} dataSource={data} rowKey="id"/> */}
      <TiposModal data={data} />
    </ContentLayout>
  );
};

export default TiposProvider;

import { ContentLayout } from "@/components/sidebar/content-layout";
import React from "react";
import MediasData from "./mediasData";

import { getStatus } from "@/service/actions/statusService";
import { RegistroModel, StatusModel } from "@/types";
import { getRegistros } from "@/service/actions/registrosService";

async function getDataStatus(): Promise<StatusModel[]> {
  return await getStatus();
}

async function getDataRegistros(): Promise<RegistroModel[]> {
  return await getRegistros();
}

const Homepage = async () => {
  const status = await getDataStatus();
  const registros = await getDataRegistros();

  return (
    <ContentLayout title="Home">
      <MediasData status={status} data={registros} />
    </ContentLayout>
  );
};

export default Homepage;

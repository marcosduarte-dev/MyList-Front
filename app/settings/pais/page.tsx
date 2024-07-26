import React from "react";
import { ContentLayout } from "@/components/sidebar/content-layout";
import { PaisModel } from "@/types";
import { getPais } from "@/service/actions/paisService";
import PaisModal from "./paisModal";

async function getData(): Promise<PaisModel[]> {
  return await getPais();
}

const PaisProvider = async () => {
  const data = await getData();

  return (
    <ContentLayout title="Pais">
      <PaisModal data={data} />
    </ContentLayout>
  );
};

export default PaisProvider;
